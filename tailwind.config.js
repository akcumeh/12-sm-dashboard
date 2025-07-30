/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    green: 'hsl(163, 72%, 41%)',
                    red: 'hsl(356, 69%, 56%)',
                },
                platform: {
                    facebook: 'hsl(208, 92%, 53%)',
                    twitter: 'hsl(203, 89%, 53%)',
                    youtube: 'hsl(348, 97%, 39%)',
                },
                light: {
                    bg: 'hsl(0, 100%, 100%)',
                    'top-bg': 'hsl(225, 100%, 98%)',
                    'card-bg': 'hsl(227, 47%, 96%)',
                    'text-primary': 'hsl(230, 17%, 14%)',
                    'text-secondary': 'hsl(228, 12%, 44%)',
                    'toggle': 'hsl(230, 22%, 74%)',
                },
                dark: {
                    bg: 'hsl(230, 17%, 14%)',
                    'top-bg': 'hsl(232, 19%, 15%)',
                    'card-bg': 'hsl(228, 28%, 20%)',
                    'text-primary': 'hsl(0, 100%, 100%)',
                    'text-secondary': 'hsl(230, 22%, 74%)',
                }
            },
            backgroundImage: {
                'instagram-gradient': 'linear-gradient(135deg, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))',
                'toggle-gradient': 'linear-gradient(135deg, hsl(210, 79%, 56%), hsl(146, 68%, 55%))',
            },
            screens: {
                'mobile': '375px',
                'desktop': '1440px',
            },
        },
    },
    plugins: [],
}