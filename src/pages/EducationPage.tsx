import UIUCIcon from "../assets/UIUC.svg";
import NYCUIcon from "../assets/NYCU.svg"
import CKIcon from "../assets/CK.png"

const EducationPage = () => {
    return (
        <div id="education" className="pr-16 py-8 rounded-lg shadow-xl flex flex-col items-center justify-center">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mt-[2px] mb-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src={UIUCIcon} className="w-32 h-auto" />
                    </span>
                    <h3 className="ml-10 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        University of Illinois - Urbana-Champaign{" "}
                        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        Latest
                    </span> */}
                    </h3>
                    <span className="ml-10 block mb-4 mt-4 font-poppins font-normal leading-none text-gray-700">
                        Master of Science in Computer Science<br/>
                    </span>
                    <time className="ml-10 block font-poppins font-normal leading-none text-gray-700">
                        September 2023 - December 2024
                    </time>
                </li>
                <li className="mt-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src={NYCUIcon} className="w-32 h-auto" />
                    </span>
                    <h3 className="ml-10 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        National Yang Ming Chiao Tung University{" "}
                    </h3>
                    <time className="ml-10 block mb-4 mt-4 font-poppins font-normal leading-none text-gray-700">
                        Bachelor of Science in Computer Science
                    </time>
                    <span className="ml-10 block mb-4 font-poppins font-normal leading-none text-gray-700">
                        September 2018 - June 2022<br/>
                    </span>
                </li>
                <li className="mt-16 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full -start-7 dark:ring-gray-900 dark:bg-blue-900">
                        <img src={CKIcon} className="w-32 h-auto" />
                    </span>
                    <h3 className="ml-10 flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        Taipei Municipal Chien Kuo High School{" "}
                    </h3>
                    <time className="ml-10 block mb-4 mt-4 font-poppins font-normal leading-none text-gray-700">
                        High School
                    </time>
                    <span className="ml-10 block mb-4 font-poppins font-normal leading-none text-gray-700">
                        September 2016 - June 2028<br/>
                    </span>
                </li>
            </ol>
        </div>
    );
};

export default EducationPage;
