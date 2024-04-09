import MobileHomePageComponent from "@/components/MobileHomePageComponent";
import HomePageComponent from "../components/HomePageComponent";

const HomePage = () => {
    return (
        <div id="home">
            <div className="md:hidden">
                <MobileHomePageComponent />
            </div>
            <div className="hidden md:block">
                <HomePageComponent />
            </div>
        </div>
    );
};

export default HomePage;
