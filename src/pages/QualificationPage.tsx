import MobileQualificationComponent from "@/components/MobileQualificationComponent";
import QualificationComponent from "@/components/QualificationComponent";

const QualificationPage = () => {
    return (
        <div
            id="qualification"
            className="flex flex-col items-center justify-center mx-8"
        >
            <h2 className="font-bold text-5xl font-poppins my-14">
                Qualification
            </h2>
            <MobileQualificationComponent />
            <QualificationComponent />
        </div>
    );
};
export default QualificationPage;
