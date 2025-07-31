import Logo from '/assets/images/icons/favicon.ico';
import FM from '/assets/images/icons/fm_logo.png';

const Footer = () => {
    return (
        <footer className="bg-light-bg dark:bg-dark-bg transition-colors duration-300 mt-8 md:mt-12 md:px-8 text-sm">
            <div className="grid grid-cols-3 gap-4 w-[90%] md:w-[50%] mx-auto">

                {/* Section 1: Challenge by */}
                <div className="text-center items-center flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-light-text-secondary dark:text-dark-text-secondary">
                        Challenge by
                    </h3>
                    <a
                        href="https://frontendmentor.io"
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors "
                    >
                        <img src={FM} alt="Frontend Mentor" className="w-6 h-6 bg-light-text-primary dark:bg-dark-text-primary rounded-full flex items-center justify-center" />
                        Frontend Mentor
                    </a>
                </div>

                {/* Section 2: Built by */}
                <div className="text-center items-center flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-light-text-secondary dark:text-dark-text-secondary">
                        Built by
                    </h3>
                    <div className="flex flex-col items-center gap-4">
                    <a
                            href="https://frontendmentor.io"
                            className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors "
                        >
                            <img src={Logo} alt="Angel Umeh" className="w-6 h-6 bg-light-text-primary dark:bg-dark-text-primary rounded-full flex items-center justify-center" />
                            Angel
                        </a>
                        <div className="flex gap-3 mt-2">
                            <a
                                href="https://github.com/akcumeh"
                                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/akcumeh"
                                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section 3: Compare designs */}
                <div className="text-center">
                    <h3 className="text-sm font-bold text-light-text-secondary dark:text-dark-text-secondary">
                        Compare designs
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="./src/assets/designs/desktop-design-dark.jpg"
                            className="px-3 py-2 text-xs bg-light-card-bg dark:bg-dark-card-bg text-light-text-secondary dark:text-dark-text-secondary rounded hover:bg-light-text-secondary/10 dark:hover:bg-dark-text-secondary/10 transition-colors"
                        >
                            Desktop Dark
                        </a>
                        <a
                            href="./src/assets/designs/desktop-design-light.jpg"
                            className="px-3 py-2 text-xs bg-light-card-bg dark:bg-dark-card-bg text-light-text-secondary dark:text-dark-text-secondary rounded hover:bg-light-text-secondary/10 dark:hover:bg-dark-text-secondary/10 transition-colors"
                        >
                            Desktop Light
                        </a>
                        <a
                            href="./src/assets/designs/mobile-design-dark.jpg"
                            className="px-3 py-2 text-xs bg-light-card-bg dark:bg-dark-card-bg text-light-text-secondary dark:text-dark-text-secondary rounded hover:bg-light-text-secondary/10 dark:hover:bg-dark-text-secondary/10 transition-colors"
                        >
                            Mobile Dark
                        </a>
                        <a
                            href="./src/assets/designs/mobile-design-light.jpg"
                            className="px-3 py-2 text-xs bg-light-card-bg dark:bg-dark-card-bg text-light-text-secondary dark:text-dark-text-secondary rounded hover:bg-light-text-secondary/10 dark:hover:bg-dark-text-secondary/10 transition-colors"
                        >
                            Mobile Light
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;