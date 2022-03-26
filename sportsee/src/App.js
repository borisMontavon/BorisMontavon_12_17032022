import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import ProfilPage from "./render/profilPage";
import ErrorPage from "./render/errorPage";
import HorizontalNav from "./render/components/horizontalNav";
import VerticalNav from "./render/components/verticalNav";
import HomePage from "./render/homePage";

function App() {
    return (
        <div className="min-h-screen bg-bgDark xl:overflow-hidden">
            <HorizontalNav />
            <VerticalNav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profil/:id" element={<ProfilPage />} />
                <Route path="*" element={<ErrorPage title={"404"} content={"La page que vous recherchez n'existe pas..."} />} />
            </Routes>
        </div>
    );
}

export default App;
