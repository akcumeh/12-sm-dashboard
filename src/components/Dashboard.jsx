import SocialCard from "./SocialCard";
import { socialData } from "../data/socialData";

const Dashboard = () => {
    return (
        <main className="px-6 md:px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

            <section>
                <h2 className="text-med md:text-lg font-bold text-light-text-secondary dark:text-dark-text-secondary mb-6">
                    Overview - Today
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Overview cards */}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;