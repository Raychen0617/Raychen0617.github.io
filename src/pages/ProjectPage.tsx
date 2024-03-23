import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@radix-ui/react-separator";

const ProjectComponent = () => {
    return (
        <div id="project" className="flex flex-col">
            <div  className="flex flex-row justify-center">
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Restaurant Ordering System App",
                            imageUrl: "/src/assets/hero.jpg",
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
                            imageUrl: "/src/assets/Traveltale.jfif",
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
            <Separator className="my-10"/>
            <div className="flex flex-row justify-center">
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Badminton Coach AI",
                            imageUrl: "/src/assets/CoachAI.png",
                            descript1:
                                "Analyze badminton players’ poses and ball types",
                            descript2:
                                "90% acc pose, 75% acc on ball‑type prediction",
                            descript3:
                                "Skills: Sklearn, Python",
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
                            imageUrl: "/src/assets/yolov5.jpg",
                            descript1:
                                "Implement optimization techniques on YOLOv5",
                            descript2:
                                "Improve over 5% mAP and reduce GPU runtime 10%",
                            descript3:
                                "Skills: Pytorch, Tflite, Python",
                            linkUrl: "https://yolov5-optimization.readthedocs.io/en/latest/",
                            linkName: "Detail Doc",
                        }}
                    />
                </div>
                <div className="w-1/2 h-1/2">
                    <ProjectCard
                        project={{
                            title: "Neural Radiance Field Augmentation",
                            imageUrl: "/src/assets/Nerf.png",
                            descript1:
                                "NERF creates 3D scenes from 2D images with DL",
                            descript2:
                                "Modify and utilize NERF to achieve data augmentation",
                            descript3:
                                "Skills: Pytorch, TensorFlow, Python",
                            linkUrl: "",
                            linkName: "",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
