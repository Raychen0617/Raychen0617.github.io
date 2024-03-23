import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Project } from "@/type";

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={project.imageUrl}
                className="border-4 border-gray-300 ml-8 rounded-full w-32 h-auto"
            />
            <div className="ml-8 flex flex-col bg-white rounded-lg shadow-lg p-6 mr-4">
                <h3 className="flex items-center mb-1 text-lg text-xl font-bold text-gray-900 dark:text-white font-poppins">
                    {project.title}
                </h3>
                <p className="text-gray-600 font-poppins mt-2">
                    {project.descript1 && (
                        <li className="mt-2"> {project.descript1}</li>
                    )}
                    {project.descript2 && (
                        <li className="mt-2"> {project.descript2}</li>
                    )}
                    {project.descript3 && (
                        <li className="mt-2 font-medium">
                            {" "}
                            {project.descript3}
                        </li>
                    )}
                </p>
                {project.linkUrl ? (
                    <Button
                        asChild
                        className="mt-6 max-w-[120px] rounded-2xl bg-gray-800 text-white font-semibold border-black border-2 hover:bg-gray-500 py-3"
                    >
                        <Link
                            to={project.linkUrl}
                            className="inline-block px-14"
                        >
                            {project.linkName}
                        </Link>
                    </Button>
                ) : <div className="mb-[72px]"></div>}
                
            </div>
        </div>
    );
};

export default ProjectCard;

// type Props = {
//     restaurant: Restaurant;
//   };
// ({ restaurant }: Props) => {
//   return (
//     <Link
//       to={`/detail/${restaurant._id}`}
//       className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
//     >
//       <AspectRatio ratio={16 / 6}>
//         <img
//           src={restaurant.imageUrl}
//           className="rounded-md w-full h-full object-cover"
//         />
//       </AspectRatio>
//       <div>
//         <h3 className="text-2xl font-mono group-hover:text-blue-500 font-bold tracking-tight mb-2 group-hover:underline">
//           {restaurant.restaurantName}
//         </h3>
//         <div id="card-content" className="grid md:grid-cols-2 gap-2">
//           <div className="flex flex-row max-w-[200px] flex-wrap">
//             {restaurant.cuisines.map((item, index) => (
//               <span className="flex">
//                 {index < restaurant.cuisines.length && <Dot />}
//                 <span className="font-mono">{item}</span>
//               </span>
//             ))}
//           </div>
//           <div className="flex gap-2 flex-col">
//             <div className="flex items-center gap-1 text-green-600">
//               <Clock className="text-green-600" />
//               <span className="font-mono">{restaurant.estimatedDeliveryTime} mins </span>
//             </div>
//             <div className="flex items-center gap-1 font-mono font-bold">
//               <Banknote />
//               Delivery from ${(restaurant.deliveryPrice / 100).toFixed(2)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };
