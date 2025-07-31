import { User } from '../models/user.js';
import { ensureConnection } from '../db/connection.js';
import {
    sendTextMessage,
    sendMessageWithAttachment,
    createAttachmentMsg,
    formatMessagesForClaude
} from './claudeAPI.js';

// User Management
export async function addUser({ id, name, tokens = 10 }) {
    await ensureConnection();

    const userData = {
        userId: id,
        name: name,
        tokens: tokens,
        streak: 0,
        convoHistory: [],
        convos: [],
        lastTokenReward: new Date(),
    };

    return await User.create(userData);
}

export async function getUser(id) {
    await ensureConnection();
    return await User.findOne({ userId: id });
}

export async function updateUser(id, updates) {
    await ensureConnection();
    return await User.findOneAndUpdate(
        { userId: id },
        { $set: updates },
        { new: true }
    );
}

// Claude API calls
export async function askClaude(user, prompt) {
    console.log('📝 Text prompt sent to Claude');

    const convo = user.convoHistory || [];
    const formattedMessages = [];

    if (convo && convo.length > 0) {
        convo.forEach(msg => {
            if (msg.role === 'user') {
                if (Array.isArray(msg.content)) {
                    // Handle stored images/documents - convert to text representation for text-only calls
                    const textContent = msg.content.find(item => item.type === 'text');
                    const hasMedia = msg.content.some(item => item.type === 'image' || item.type === 'document');

                    let contentText = textContent ? textContent.text : '';
                    if (hasMedia) {
                        contentText = `[Previous message contained media] ${contentText}`;
                    }

                    formattedMessages.push({
                        role: 'user',
                        content: `Here is the user query for you to respond to:
<user_query>
${contentText}
</user_query>`
                    });
                } else {
                    // Handle text-only messages
                    formattedMessages.push({
                        role: 'user',
                        content: `Here is the user query for you to respond to:
<user_query>
${msg.content}
</user_query>`
                    });
                }
            } else if (msg.role === 'assistant') {
                formattedMessages.push({
                    role: 'assistant',
                    content: `[Florence*]

${msg.content}`
                });
            }
        });
    }

    // Add current message
    formattedMessages.push({
        role: 'user',
        content: `Here is the user query for you to respond to:
<user_query>
${prompt}
</user_query>`
    });

    formattedMessages.push({
        role: 'assistant',
        content: '[Florence*]'
    });

    const response = await sendTextMessage(formattedMessages);

    console.log('✅ Claude response received');
    return response.replace(/^\[Florence\*\]\s*/, '');
}

export async function askClaudeWithAtt(user, b64, fileType, prompt) {
    console.log('📎 Image/document prompt sent to Claude');

    const messageContent = createAttachmentMsg(b64, fileType, prompt);
    const convo = user.convoHistory || [];
    const formattedMessages = [];

    if (convo && convo.length > 0) {
        convo.forEach(msg => {
            if (msg.role === 'user') {
                if (Array.isArray(msg.content)) {
                    // Handle stored images/documents in conversation history
                    const formattedContent = msg.content.map(item => {
                        if (item.type === 'text') {
                            return {
                                type: 'text',
                                text: `Here is the user query for you to respond to:
<user_query>
${item.text}
</user_query>`
                            };
                        } else if (item.type === 'image') {
                            return {
                                type: 'image',
                                source: {
                                    type: 'base64',
                                    media_type: item.source.media_type,
                                    data: item.source.data
                                }
                            };
                        } else if (item.type === 'document') {
                            return {
                                type: 'document',
                                source: {
                                    type: 'base64',
                                    media_type: item.source.media_type,
                                    data: item.source.data
                                }
                            };
                        }
                        return item;
                    });

                    formattedMessages.push({
                        role: 'user',
                        content: formattedContent
                    });
                } else {
                    // Handle text-only messages
                    formattedMessages.push({
                        role: 'user',
                        content: `Here is the user query for you to respond to:
<user_query>
${msg.content}
</user_query>`
                    });
                }
            } else if (msg.role === 'assistant') {
                formattedMessages.push({
                    role: 'assistant',
                    content: `[Florence*]

${msg.content}`
                });
            }
        });
    }

    // Add the current message
    formattedMessages.push({
        role: 'user',
        content: [
            {
                type: 'text',
                text: `Here is the user query for you to respond to:
<user_query>
${prompt}
</user_query>`
            },
            ...messageContent.filter(item => item.type !== 'text')
        ]
    });

    formattedMessages.push({
        role: 'assistant',
        content: '[Florence*]'
    });

    const response = await sendMessageWithAttachment(formattedMessages);

    console.log('✅ Claude response received');
    return response.replace(/^\[Florence\*\]\s*/, '');
}

// Welcome message
export function walkThru(tokens) {
    return `Hello there! Welcome to Florence*, the educational assistant at your fingertips.

Florence* is here to help you with your studies, and answer any questions you may have. You can ask anything from math and science to finance, history and literature. Just type your question, send a picture or a document, and you'll be provided a detailed answer within 3-30 seconds.

Interacting with Florence* costs you tokens*. Every now and then you'll get these, but you can also purchase more of them at any time.

Text-only - 1 token
Image - 2 tokens
Document - 2 tokens

You currently have ${tokens} tokens*.


Here are a few helpful commands for a smooth experience:

/start - Florence* is now listening to you. This also starts a NEW conversation thread.
/about - Learn more about Florence*.
/tokens - See how many tokens you have left.
/payments - Top up your tokens.
/conversations - View and continue previous conversations.
/stem - Answer math & science questions even better. [coming soon]
/research - Get help with your research/thesis/project. [coming soon]
/transactions - View your transaction history
/feedback - Send feedback to the developers.
/verify [reference number] - Verify your payment status.

/help - Get a list of all commands.

Please note: Every message except commands will be considered a prompt.`;
}