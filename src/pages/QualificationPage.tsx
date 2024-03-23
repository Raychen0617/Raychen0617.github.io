import { Separator } from "@radix-ui/react-separator";
import EducationPage from "./EducationPage";
import WorkPage from "./WorkPage";

const QualificationPage = () => {
    return (
        <div id="qualification" className="flex flex-row items-start justify-center">
            <EducationPage/>
            <Separator className="mx-12"></Separator>
            <WorkPage/>
        </div>
    )
}
export default QualificationPage ;