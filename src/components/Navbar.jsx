import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-5 text-lg text-neutral-500">
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Career</Link>
            </div>
            <div className="login flex items-center gap-4">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <button className="bg-neutral-700 text-base-100 text-xl font-lg px-10 py-4">Login</button>
            </div>
        </div>
    );
};

export default Navbar;