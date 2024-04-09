import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-scroll";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-gray-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetDescription className="flex flex-col gap-4">
                    <Link to="home" smooth={true} duration={1500} offset={-300} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">About</Link> 
                    <Link to="qualification" smooth={true} duration={1500} offset={-300} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">Qualification</Link>
                    <Link to="skill" smooth={true} duration={1500} offset={-380} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">Skill</Link>
                    <Link to="project"  smooth={true} duration={1500} offset={-250} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">Project</Link>
                    <Link to="publication"  smooth={true} duration={1500} offset={-400} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">Publication</Link>
                    <Link to="contact"  smooth={true} duration={1500} className="ml-2 hover:underline underline-offset-8 decoration-gray-500">Contact Info</Link>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
