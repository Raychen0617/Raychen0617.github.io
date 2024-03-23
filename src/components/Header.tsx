//import { Link } from "react-router-dom";
// const Header = () => {
//     return (
//         <div className="flex flex-row font-poppins py-6">
//             <Link to="/" className="mr-auto ml-20 text-2xl text-gray-500">Chentzj's Space</Link>
//             <div className="flex flex-row ml-auto mr-5">
//                 <span className="font-regular text-gray-500">
//                     <Link to="/education" className="hover:underline underline-offset-8 decoration-gray-500">Education</Link>
//                     <Link to="/work" className="mx-5 hover:underline underline-offset-8 decoration-gray-500">Work Experience</Link>
//                     <Link to="/project" className="hover:underline underline-offset-8 decoration-gray-500">Projects</Link>
//                     <Link to="/publication" className="mx-5 hover:underline underline-offset-8 decoration-gray-500">Publication</Link>
//                 </span>
//             </div>
//         </div>
//     )
// }
import { Link } from "react-scroll";
const Header = () => {
    return (
        <div  className="opacity-100 bg-white flex flex-row font-poppins py-6">
            <Link to="home" smooth={true} duration={1500} offset={-300} className="italic mr-auto ml-20 text-2xl text-gray-500">CHENTZJ</Link>
            <div className="flex flex-row ml-auto mr-5">
                <span className="font-regular text-gray-500">
                    <Link to="home" smooth={true} duration={1500} offset={-300} className="hover:underline underline-offset-8 decoration-gray-500">About</Link>
                    <Link to="qualification" smooth={true} duration={1500} offset={-200} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Qualification</Link>
                    <Link to="project"  smooth={true} duration={1500} offset={-150} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Project</Link>
                    <Link to="publication"  smooth={true} duration={1500} offset={-350} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Publication</Link>
                    <Link to="contact"  smooth={true} duration={1500} className="ml-5 hover:underline underline-offset-8 decoration-gray-500">Contact Info</Link>
                </span>
            </div>
        </div >
    )
}
export default Header;

