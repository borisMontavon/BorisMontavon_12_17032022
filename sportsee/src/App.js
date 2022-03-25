import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import ProfilPage from "./render/profilPage";
import ErrorPage from "./render/components/errorPage";
import HorizontalNav from "./render/components/horizontalNav";
import VerticalNav from "./render/components/verticalNav";

function App() {
    return (
        <div className="min-h-screen bg-bgDark xl:overflow-hidden">
            <HorizontalNav />
            <VerticalNav />
            <Routes>
                <Route path="/profil/:id" element={<ProfilPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
