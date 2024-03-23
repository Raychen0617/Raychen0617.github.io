import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/ProjectPage";
import { Separator } from "@radix-ui/react-separator";
import QualificationPage from "@/pages/QualificationPage";
import ContactPage from "@/pages/ContactPage";
import PublicationPage from "@/pages/PublicationPage";

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
};

const Layout = ({children}: Props) =>{
    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50 bg-black shadow-md font-poppins">
                <Header/>
            </div>
            <Separator className="my-12"/>
            <HomePage/>
            <Separator className="my-20"/>
            <QualificationPage/>
            <Separator className="my-32"/>
            <ProjectPage/>
            <Separator className="my-32"/>
            <PublicationPage/>
            <Separator className="my-32"/>
            <ContactPage/>
            <Separator className="my-40"/>
            {/* <div className="container mx-auto flex-1 my-10">{children}</div> */}
        </div>
    )
}

export default Layout;