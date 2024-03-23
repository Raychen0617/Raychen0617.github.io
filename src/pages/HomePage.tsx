import { Button } from "@/components/ui/button";
import me from "../assets/me.jpeg"
import { GithubIcon, LinkedinIcon} from "lucide-react";

const HomePage = () => {
    return (
        <div id="home" className="my-24 flex-row flex items-center justify-center font-poppins">
            <img src={me} className="rounded-full w-64 h-auto mr-20 border-4 border-gray-400"></img>
            <div className="ml-10 flex flex-col items-center justify-center">
                <span>Hello I'm</span>
                <span className="my-1 text-5xl font-semibold">Ray</span>
                <span className="my-1 mb-6 text-gray-500 text-2xl">Software Engineer</span>
                <div className="flex flex-row my-2 mt-6">
                    <Button className="mx-5 rounded-2xl bg-white text-black font-semibold border-black border-2 hover:bg-gray-100">Download CV</Button>
                    <Button className="rounded-2xl bg-white text-black font-semibold border-black border-2 hover:bg-gray-100">Download TXN</Button>
                </div>
                <div className="flex flex-row my-3">
                    <GithubIcon size={45} strokeWidth={1.5} color="white" className="mx-5 bg-black rounded-full px-1.5 hover:bg-gray-700"/>
                    <LinkedinIcon size={45} strokeWidth={1.5} color="white" className="bg-black rounded-full px-2 hover:bg-gray-700"/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
