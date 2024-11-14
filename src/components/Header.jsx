import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-4">
            <div>
                <img className="w-[471px] h-[60px]" src={logo} alt="" />
            </div>
            <h2 className="text-xl text-neutral-500">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;