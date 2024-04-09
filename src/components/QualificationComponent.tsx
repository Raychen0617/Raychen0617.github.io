import EducationPage from "../pages/EducationPage";
import WorkPage from "../pages/WorkPage";
import { Separator } from "@radix-ui/react-separator";

const QualificationComponent = () => {
    return (
        <div className="hidden md:flex flex flex-row items-start justify-center">
            <EducationPage />
            <Separator className="mx-12"></Separator>
            <WorkPage />
        </div>
    );
};

export default QualificationComponent;
