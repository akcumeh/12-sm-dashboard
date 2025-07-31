// Import icons
import FacebookIcon from '../assets/images/icons/icon-facebook.svg';
import TwitterIcon from '../assets/images/icons/icon-twitter.svg';
import InstagramIcon from '../assets/images/icons/icon-instagram.svg';
import YoutubeIcon from '../assets/images/icons/icon-youtube.svg';
import UpIcon from '../assets/images/icons/icon-up.svg';
import DownIcon from '../assets/images/icons/icon-down.svg';

const platformIcons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon
};

const OverviewCard = ({ title, platform, value, change, isPositive }) => {
    const PlatformIcon = platformIcons[platform];
    const ChangeIcon = isPositive ? UpIcon : DownIcon;

    return (
        <div className="metric-card flex flex-col justify-between w-auto gap-6 hover:bg-light-text-secondary/10 dark:hover:bg-dark-text-secondary/10 cursor-pointer transition-all duration-200">
            {/* Header with title and platform icon */}
            <div className="flex flex-row justify-between items-center">
                <h3 className="text-sm font-bold text-light-text-secondary dark:text-dark-text-secondary">
                    {title}
                </h3>
                <img src={PlatformIcon} alt={platform} className="w-5 h-5" />
            </div>

            {/* Value and change */}
            <div className="flex justify-between items-end">
                <div className="text-2xl md:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                    {value >= 10000 ? Math.floor(value / 1000) + 'k' : value}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-primary-green' : 'text-primary-red'
                    }`}>
                    <img src={ChangeIcon} alt={isPositive ? 'up' : 'down'} className="w-2 h-1" />
                    <span>{Math.abs(change)}%</span>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;