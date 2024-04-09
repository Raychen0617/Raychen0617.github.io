import MainProjectPage from "./MainProjectPage";
import MobileProjectPage from "./MobileProjectPage";

const ProjectComponent = () => {
    return (
        <div id="project" className="mx-8 flex flex-col items-center justify-center">
            <h2 className="font-bold text-5xl font-poppins my-8">Project</h2>
            <MainProjectPage />
            <MobileProjectPage />
        </div>
    );
};

export default ProjectComponent;
