import SocialCard from './SocialCard';
import OverviewCard from './OverviewCard';
import { socialData } from '../data/socialData';
import { overviewData } from '../data/overviewData';

const Dashboard = () => {
    return (
        <main className="px-6 md:px-8 pb-8">
            {/* Social Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] mb-12">
                {socialData.map((social) => (
                    <SocialCard
                        key={social.id}
                        platform={social.platform}
                        username={social.username}
                        followers={social.followers}
                        todayChange={social.todayChange}
                        isPositive={social.isPositive}
                    />
                ))}
            </div>

            {/* Overview Section */}
            <section>
                <h2 className="text-med font-bold text-light-text-secondary dark:text-dark-text-secondary mb-6">
                    Overview - Today
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[3rem] gap-y-4 md:gap-y-6">
                    {overviewData.map((overview) => (
                        <OverviewCard
                            key={overview.id}
                            title={overview.title}
                            platform={overview.platform}
                            value={overview.value}
                            change={overview.change}
                            isPositive={overview.isPositive}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;