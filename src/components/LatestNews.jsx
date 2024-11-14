import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-3 bg-neutral-100 p-4">
            <p className="bg-rose-600 text-base-100 px-6 py-2 font-medium text-xl">Latest</p>
            <Marquee pauseOnHover className="space-x-10">
            <Link className="text-lg font-lg text-neutral-700" to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, asperiores.</Link>
            <Link className="text-lg font-lg text-neutral-700" to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, asperiores.</Link>
            <Link className="text-lg font-lg text-neutral-700" to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, asperiores.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;