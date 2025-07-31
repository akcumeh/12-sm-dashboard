// Import icons
import FacebookIcon from '../assets/images/icon-facebook.svg';
import TwitterIcon from '../assets/images/icon-twitter.svg';
import InstagramIcon from '../assets/images/icon-instagram.svg';
import YoutubeIcon from '../assets/images/icon-youtube.svg';
import UpIcon from '../assets/images/icon-up.svg';
import DownIcon from '../assets/images/icon-down.svg';

const platformIcons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon
};

const platformBorders = {
    facebook: 'bg-platform-facebook',
    twitter: 'bg-platform-twitter',
    instagram: 'bg-instagram-gradient',
    youtube: 'bg-platform-youtube'
};

const SocialCard = ({ platform, username, followers, todayChange, isPositive }) => {
    const PlatformIcon = platformIcons[platform];
    const borderClass = platformBorders[platform];
    const ChangeIcon = isPositive ? UpIcon : DownIcon;

    return (
        <div className="social-card flex flex-col items-center w-auto mx-3 ">
            {/* Card top border */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${borderClass}`}></div>

            {/* Main card */}
            <div className="flex flex-col items-center p-3 gap-6">
                <div className="flex items-center gap-3 md:gap-2">
                    <img src={PlatformIcon} alt={platform} className="w-5 h-5" />
                    <span className="text-sm font-bold text-light-text-secondary dark:text-dark-text-secondary">
                        {platform === 'youtube' ? username : `@${username}`}
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-xxl md:text-xl tracking-tight font-bold text-light-text-primary dark:text-dark-text-primary leading-[1.125]">
                        {followers >= 10000 ? Math.floor(followers / 1000) + 'k' : followers}
                    </span>
                    <span className="text-sm tracking-widest md:tracking-wide text-light-text-secondary dark:text-dark-text-secondary">
                        {platform === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}
                    </span>
                </div>

                <div className={`flex items-center justify-center gap-1 text-sm font-bold ${isPositive ? 'text-primary-green' : 'text-primary-red'
                    }`}>
                    <img src={ChangeIcon} alt={isPositive ? 'up' : 'down'} className="w-2 h-1" />
                    <span>{Math.abs(todayChange)} Today</span>
                </div>
            </div>
        </div>
    );
};

export default SocialCard;