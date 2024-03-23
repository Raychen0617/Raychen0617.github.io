interface SkillCardListProps {
    skillName: string;
    skillLevel: string;
}
import { BadgeCheck } from 'lucide-react';

const SkillCardList = ({ skillName, skillLevel }: SkillCardListProps) => {
    return (
        <div className="mb-6 mt-2 flex flex-row items-start justify-center">
            <BadgeCheck className='my-[6px] mr-2'/>
            <div>
                <span>
                    {skillName}
                    <br />
                </span>
                <span className="text-gray-500 text-sm">{skillLevel}</span>
            </div>
        </div>
    );
};
export default SkillCardList;
