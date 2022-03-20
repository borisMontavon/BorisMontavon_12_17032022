import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import ProfilPage from "./render/profilPage";

function App() {
    return (
        <div className="min-h-screen max-h-screen bg-bgDark">
            <Routes>
                <Route path="/:id" element={<ProfilPage />} />
            </Routes>
        </div>
    );
}

export default App;
