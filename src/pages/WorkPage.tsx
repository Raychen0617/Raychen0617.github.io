import MDIcon from "../assets/MD.jfif";
import NYCUIcon from "../assets/NYCU.svg";
import BIOIcon from "../assets/BIO.jpg";
import SynopsysIcon from "../assets/Synopsys.jpg"

const WorkComponent = () => {
    return (
        <div
            id="work"
            className="pr-16 py-8 rounded-lg shadow-xl flex flex-col items-center justify-center ml-10"
        >
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src={SynopsysIcon} className="w-32 rounded-full h-auto" />
                    </span>
                    <h3 className="ml-12 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        Synopsys{" "}
                    </h3>
                    <time className="ml-12 block mb-4 font-poppins font-normal leading-none text-gray-700">
                        June 2024 - August 2024
                    </time>
                </li>
                <li className="mb-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src={MDIcon} className="w-32 h-auto" />
                    </span>
                    <h3 className="ml-12 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        FOXCONN - MobileDrive{" "}
                    </h3>
                    <time className="ml-12 block mb-4 font-poppins font-normal leading-none text-gray-700">
                        July 2024 - January 2023
                    </time>
                </li>
                <li className="mb-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src={NYCUIcon} className="w-32 h-auto" />
                    </span>
                    <h3 className="ml-12 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        NYCU - AIMMLab{" "}
                    </h3>
                    <time className="ml-12 block mb-4 font-poppins font-normal leading-none text-gray-700">
                        July 2021 – November 2022
                    </time>
                </li>

                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full -start-7 dark:ring-gray-900 dark:bg-blue-900">
                        <img src={BIOIcon} className="w-64 h-auto" />
                    </span>
                    <h3 className="ml-12 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        Taiwan Main Orthopaedic Technology{" "}
                    </h3>
                    <time className="ml-12 block mb-4  font-poppins font-normal leading-none text-gray-700">
                        July 2020 – September 2020
                    </time>
                </li>
            </ol>
        </div>
    );
};

export default WorkComponent;
