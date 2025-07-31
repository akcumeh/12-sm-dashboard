import { Link } from 'react-router-dom';
import aiIcon from "../assets/images/icons/ai_icon.png";

const FAQLink = () => {
    return (
<<<<<<< HEAD
        <div className="flex items-center justify-center bg-floWhite rounded-full text-[10px] md:text-sm my-4 shadow-sm border-floAsh border-[1px] px-4 py-1 hover:border-floBlue h-auto">
            <Link to="/faq" className="no-underline flex items-center justify-center hover:border-floBlue h-auto">
=======
        <Link to="/faq" className="no-underline">
            <div className="flex items-center justify-center bg-floWhite rounded-full text-sm my-4 shadow-sm border-floAsh border-[1px] px-4 py-1 hover:border-floBlue">
>>>>>>> parent of 600b9e4 (Update Bot links component)
                <img src={aiIcon} alt="AI" className="w-3 mr-1" />
                <span>
                    <span className="text-floBlue">FAQ: </span>
                    <span className="text-floBlack">You&apos;ve got </span>
                    <span className="text-floBlue">questions</span>
                    <span className="text-floBlack">, we&apos;ve got </span>
                    <span className="text-floBlue">answers!</span>
                </span>
            </Link>
        </div>
    );
};

export default FAQLink;