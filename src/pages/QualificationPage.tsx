import { Separator } from "@radix-ui/react-separator";
import EducationPage from "./EducationPage";
import WorkPage from "./WorkPage";

const QualificationPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-5xl font-poppins my-14">
                Qualification
            </h2>
            <div
                id="qualification"
                className="flex flex-row items-start justify-center"
            >
                <EducationPage />
                <Separator className="mx-12"></Separator>
                <WorkPage />
            </div>
        </div>
    );
};
export default QualificationPage;
