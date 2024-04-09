import { Separator } from "@radix-ui/react-separator";
import SkillCard from "../components/SkillCard";
const SkillPage = () => {
    return (
        <div id="skill" className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-5xl font-poppins my-14">Skill</h2>
            <div
                className="hidden md:flex flex flex-row items-center justify-center"
            >
                <SkillCard
                    skilltitle={"Programming Language"}
                    skillName1={"Python"}
                    skillLevel1={"Advanced"}
                    skillName2={"C/C++"}
                    skillLevel2={"Advanced"}
                    skillName3={"GLSL"}
                    skillLevel3={"Intermediate"}
                    skillName4={"Html/CSS"}
                    skillLevel4={"Intermediate"}
                    skillName5={"JavaScript"}
                    skillLevel5={"Intermediate"}
                    skillName6={"TypeScript"}
                    skillLevel6={"Intermediate"}
                />
                <Separator className="ml-20" />
                <SkillCard
                    skilltitle={"Tools"}
                    skillName1={"Git"}
                    skillLevel1={"Advanced"}
                    skillName2={"Docker"}
                    skillLevel2={"Advanced"}
                    skillName3={"AWS"}
                    skillLevel3={"Intermediate"}
                    skillName4={"MongoDB"}
                    skillLevel4={"Intermediate"}
                    skillName5={"Spark"}
                    skillLevel5={"Intermediate"}
                    skillName6={"UE4"}
                    skillLevel6={"Intermediate"}
                />
                <Separator className="ml-20" />
                <SkillCard
                    skilltitle={"Framework"}
                    skillName1={"Pytorch"}
                    skillLevel1={"Advanced"}
                    skillName2={"Tensorflow"}
                    skillLevel2={"Advanced"}
                    skillName3={"Scikit-learn"}
                    skillLevel3={"Advanced"}
                    skillName4={"NodeJS"}
                    skillLevel4={"Intermediate"}
                    skillName5={"React"}
                    skillLevel5={"Intermediate"}
                    skillName6={"OpenGL"}
                    skillLevel6={"Intermediate"}
                />
            </div>
            <div
                className="md:hidden flex flex-col items-center justify-center"
            >
                <SkillCard
                    skilltitle={"Programming Language"}
                    skillName1={"Python"}
                    skillLevel1={"Advanced"}
                    skillName2={"C/C++"}
                    skillLevel2={"Advanced"}
                    skillName3={"GLSL"}
                    skillLevel3={"Intermediate"}
                    skillName4={"Html/CSS"}
                    skillLevel4={"Intermediate"}
                    skillName5={"JavaScript"}
                    skillLevel5={"Intermediate"}
                    skillName6={"TypeScript"}
                    skillLevel6={"Intermediate"}
                />
                <Separator className="mt-10" />
                <SkillCard
                    skilltitle={"Tools"}
                    skillName1={"Git"}
                    skillLevel1={"Advanced"}
                    skillName2={"Docker"}
                    skillLevel2={"Advanced"}
                    skillName3={"AWS"}
                    skillLevel3={"Intermediate"}
                    skillName4={"MongoDB"}
                    skillLevel4={"Intermediate"}
                    skillName5={"Spark"}
                    skillLevel5={"Intermediate"}
                    skillName6={"UE4"}
                    skillLevel6={"Intermediate"}
                />
                <Separator className="mt-10" />
                <SkillCard
                    skilltitle={"Framework"}
                    skillName1={"Pytorch"}
                    skillLevel1={"Advanced"}
                    skillName2={"Tensorflow"}
                    skillLevel2={"Advanced"}
                    skillName3={"Scikit-learn"}
                    skillLevel3={"Advanced"}
                    skillName4={"NodeJS"}
                    skillLevel4={"Intermediate"}
                    skillName5={"React"}
                    skillLevel5={"Intermediate"}
                    skillName6={"OpenGL"}
                    skillLevel6={"Intermediate"}
                />
            </div>
        </div>
    );
};
export default SkillPage;
