import EducationPage from "@/pages/EducationPage";
import WorkPage from "@/pages/WorkPage";
import { Separator } from "@radix-ui/react-separator";

const MobileQualificationComponent = () => {
    return (
        <div className="md:hidden flex flex-col items-center justify-center mx-8">
            <EducationPage />
            <Separator className="my-4"></Separator>
            <WorkPage />
        </div>
    );
};

export default MobileQualificationComponent;
