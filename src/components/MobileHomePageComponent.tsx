import { Button } from "@/components/ui/button";
import me from "../assets/me.jpeg";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import CV from "../assets/TzuJui_Chen_resume.pdf";

const MobileHomePageComponent = () => {
    return (
        <div
            id="home"
            className="flex-col flex items-center justify-center font-poppins"
        >
            <img
                src={me}
                className="ml-8 mb-8 rounded-full w-64 h-auto border-4 border-gray-400"
            ></img>
            <div className="ml-8 flex flex-col items-center justify-center">
                <span>Hello I'm</span>
                <span className="my-1 text-5xl font-semibold">Ray</span>
                <span className="my-1 mb-6 text-gray-500 text-2xl">
                    Software Engineer
                </span>
                <div className="flex flex-row items-center justify-center mb-2 mt-6">
                    <Button className="mx-5 rounded-2xl bg-white text-black font-semibold border-black border-2 hover:bg-gray-100">
                        <a href={CV} download="cv.pdf">
                            Download CV
                        </a>
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-center mr-4 my-3">
                    <a
                        href="https://github.com/Raychen0617"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon
                            size={45}
                            strokeWidth={1.5}
                            color="white"
                            className="mx-5 bg-black rounded-full px-1.5 hover:bg-gray-700"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chentzj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon
                            size={45}
                            strokeWidth={1.5}
                            color="white"
                            className="bg-black rounded-full px-2 hover:bg-gray-700"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileHomePageComponent;
