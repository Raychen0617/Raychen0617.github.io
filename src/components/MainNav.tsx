import { Link } from "react-scroll";

const MainNav = () => {
    return (
        <span className="font-regular text-gray-500">
            <Link to="home" smooth={true} duration={1500} offset={-200} className="hover:underline underline-offset-8 decoration-gray-500">About</Link>
            <Link to="qualification" smooth={true} duration={1500} offset={-100} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Qualification</Link>
            <Link to="skill" smooth={true} duration={1500} offset={-150} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Skill</Link>
            <Link to="project"  smooth={true} duration={1500} offset={-150} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Project</Link>
            <Link to="publication"  smooth={true} duration={1500} offset={-200} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Publication</Link>
            <Link to="contact"  smooth={true} duration={1500} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Contact Info</Link>
        </span>
    );
};

export default MainNav;