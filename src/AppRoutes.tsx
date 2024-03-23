import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import WorkPage from "./pages/WorkPage";


const AppRoutes = ()=>{
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                        <Layout showHero>
                            <HomePage/>
                        </Layout>
                } 
            />
            <Route 
                path="/education" 
                element={
                        <Layout showHero>
                            <EducationPage/>
                        </Layout>
                } 
            />
            <Route 
                path="/work" 
                element={
                        <Layout showHero>
                            <WorkPage/>
                        </Layout>
                } 
            />
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AppRoutes;

