import { Separator } from "@radix-ui/react-separator";
import SkillCardList from "./SkillCardList";

interface SkillCardProps {
    skilltitle: string;
    skillName1: string;
    skillLevel1: string;
    skillName2: string;
    skillLevel2: string;
    skillName3: string;
    skillLevel3: string;
    skillName4: string;
    skillLevel4: string;
    skillName5: string;
    skillLevel5: string;
    skillName6: string;
    skillLevel6: string;
}

const SkillCard = ({
    skilltitle,
    skillLevel1,
    skillLevel2,
    skillLevel3,
    skillLevel4,
    skillLevel5,
    skillLevel6,
    skillName1,
    skillName2,
    skillName3,
    skillName4,
    skillName5,
    skillName6,
}: SkillCardProps) => {
    return (
        <div className="px-6 border-4 shadow-lg rounded-3xl flex flex-col items-center justify-center font-poppins">
            <h1 className="font-bold my-4">{skilltitle}</h1>
            <div className="flex flex-row">
                <div className="flex flex-col items-start justify-center">
                    <SkillCardList
                        skillName={skillName1}
                        skillLevel={skillLevel1}
                    />
                    <SkillCardList
                        skillName={skillName2}
                        skillLevel={skillLevel2}
                    />
                    <SkillCardList
                        skillName={skillName3}
                        skillLevel={skillLevel3}
                    />
                </div>
                <Separator className="mx-6" />
                <div className="flex flex-col flex flex-col">
                    <SkillCardList
                        skillName={skillName4}
                        skillLevel={skillLevel4}
                    />
                    <SkillCardList
                        skillName={skillName5}
                        skillLevel={skillLevel5}
                    />
                    <SkillCardList
                        skillName={skillName6}
                        skillLevel={skillLevel6}
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
