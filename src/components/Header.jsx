import Toggle from './ui/Toggle';
import { socialData } from '../data/socialData';

const Header = ({ darkMode, onToggleDarkMode }) => {
    return (
        <header className="px-6 py-8 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-med md:text-lg font-bold text-light-text-primary dark:text-dark-text-primary">
                        Social Media Dashboard
                    </h1>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-semibold mt-1">
                        Total Followers: {socialData.reduce((total, social) => total + social.followers, 0).toLocaleString()}
                    </p>
                </div>

                <div className="flex justify-between gap-3 items-center pt-4 md:pt-0 border-t border-light-text-secondary/20 dark:border-dark-text-secondary/20 md:border-t-0">
                    <span className="font-bold text-light-text-secondary dark:text-dark-text-secondary">
                        Dark Mode
                    </span>
                    <Toggle checked={darkMode} onChange={onToggleDarkMode} />
                </div>
            </div>
        </header>
    );
};

export default Header;