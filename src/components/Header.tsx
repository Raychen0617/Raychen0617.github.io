import { Link } from "react-scroll";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <div  className="opacity-100 bg-white flex flex-row items-center justify-between font-poppins py-6">
            <Link to="home" smooth={true} duration={1500} offset={-300} className="hidden md:block ml-8 italic text-2xl text-gray-500">CHENTZJ</Link>
            <Link to="home" smooth={true} duration={1500} offset={-300} className="md:hidden ml-4 italic text-2xl text-gray-500">CHENTZJ</Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block flex flex-row ml-auto mr-5">
                <MainNav />
            </div>
        </div >
    )
}
export default Header;

