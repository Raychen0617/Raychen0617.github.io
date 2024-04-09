import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@radix-ui/react-separator";
import Hero from "../assets/hero.jpg";
import Traveltale from "../assets/Traveltale.jfif";
import CoachAI from "../assets/CoachAI.png";
import Yolo from "../assets/yolov5.jpg";
import Nerf from "../assets/Nerf.png";

const MainProjectPage = () => {
    return (
        <div className="hidden md:flex flex-col">
            <div className="flex flex-row justify-center">
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Restaurant Ordering System App",
                            imageUrl: Hero,
                            descript1:
                                "A restaurant ordering website for both customers and owners",
                            descript2:
                                "Features: user authentication or management, order processing, checkout, searching",
                            descript3:
                                "Skills: TypeScript, NodeJS, ExpressJS, ReactJS, MongoDB",
                            linkUrl:
                                "https://restaurant-ordering-app-frontend.onrender.com/",
                            linkName: "Live Demo",
                        }}
                    />
                </div>
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Travel Tales Journal Mobile App",
                            imageUrl: Traveltale,
                            descript1:
                                "A journaling app incorporating multiple UI principle, such as perception, visual design",
                            descript2:
                                "Testing with low-fidelity prototypes, interviews, and evaluations across diverse personas",
                            descript3:
                                "Skills: JavaScript, Android Studio, UI Design",
                            linkUrl: "https://github.com/wutonytt/TravelTales",
                            linkName: "Source Code",
                        }}
                    />
                </div>
            </div>
            <Separator className="my-10" />
            <div className="flex flex-row justify-center">
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Badminton Coach AI",
                            imageUrl: CoachAI,
                            descript1:
                                "Analyze badminton players’ poses and ball types",
                            descript2:
                                "90% acc pose, 75% acc on ball‑type prediction",
                            descript3: "Skills: Sklearn, Python",
                            linkUrl:
                                "https://github.com/Coach-AI-Final/Final_File",
                            linkName: "Source Code",
                        }}
                    />
                </div>
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Yolov5 Optimization Pipeline",
                            imageUrl: Yolo,
                            descript1:
                                "Implement optimization techniques on YOLOv5",
                            descript2:
                                "Improve over 5% mAP and reduce GPU runtime 10%",
                            descript3: "Skills: Pytorch, Tflite, Python",
                            linkUrl:
                                "https://yolov5-optimization.readthedocs.io/en/latest/",
                            linkName: "Detail Doc",
                        }}
                    />
                </div>
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "NERF Data Augmentation",
                            imageUrl: Nerf,
                            descript1:
                                "NERF creates 3D scenes from 2D images with DL",
                            descript2:
                                "Utilize NERF to achieve data augmentation",
                            descript3: "Skills: Pytorch, TensorFlow, Python",
                            linkUrl: "https://github.com/bmild/nerf",
                            linkName: "Nerf",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainProjectPage;
