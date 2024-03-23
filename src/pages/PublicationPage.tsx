import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ICCV from '../assets/ICCV.jfif'

const PublicationPage = () => {
    return (
        <div id="publication">
            <div className="flex flex-row items-center justify-center">
                <img
                    src={ICCV}
                    className="ml-8 rounded-xl shadow-lg w-32 h-auto p-2"
                />
                <div className="ml-8 flex flex-col bg-white rounded-lg shadow-lg p-6 mr-4">
                    <h3 className="flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        Most Important Person-Guided Dual-Branch Cross-Patch
                        Attention for Group Affect Recognition
                    </h3>
                    <p className="text-gray-600 font-poppins mt-2">
                        <li className="mt-2">
                            {" "}
                            The research paper has been accepted for publication
                            at ICCV 2023
                        </li>
                        <li className="mt-2">
                            {" "}
                            Devise a dual‑branch vision transformer network for
                            group affect recognition with minimum data
                            preprocessing{" "}
                        </li>
                        <li className="mt-2">
                            {" "}
                            With parameters less than 10x, our proposed model
                            outperforms state-of-the-art methods{" "}
                        </li>
                    </p>
                    <Button
                        asChild
                        className="mt-6 max-w-[120px] rounded-2xl bg-gray-800 text-white font-semibold border-black border-2 hover:bg-gray-500 py-3"
                    >
                        <Link
                            to={"https://openaccess.thecvf.com/content/ICCV2023/papers/Xie_Most_Important_Person-Guided_Dual-Branch_Cross-Patch_Attention_for_Group_Affect_Recognition_ICCV_2023_paper.pdf"}
                            className="inline-block px-14"
                        >
                            Paper
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default PublicationPage;
