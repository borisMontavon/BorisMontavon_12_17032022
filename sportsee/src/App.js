import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import ProfilPage from "./render/profilPage";

function App() {
    return (
        <div className="min-h-screen bg-bgDark xl:overflow-hidden">
            <Routes>
                <Route path="/:id" element={<ProfilPage />} />
            </Routes>
        </div>
    );
}

export default App;
