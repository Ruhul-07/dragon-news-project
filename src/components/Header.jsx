import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-4">
            <div>
                <img className="w-[471px] h-[60px]" src={logo} alt="" />
            </div>
            <h2 className="text-lg text-neutral-500">Journalism Without Fear or Favour</h2>
            <p className="text-neutral-500 font-medium text-xl">{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;