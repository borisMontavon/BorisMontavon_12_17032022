import { Routes, Route } from "react-router-dom";
import { apiCall } from "./services/apiService";
import { USER_ROUTE } from "./config/routeConfig";
import "./css/compiled/compiled.css";
import ProfilPage from "./render/profilPage";

async function test() {
  console.log(await apiCall({"route": USER_ROUTE, "userId": 12}));
}

test();

function App() {
    return (
        <div className="min-h-screen dark:bg-bgDark">
            <Routes>
                <Route path="/:id" element={<ProfilPage />} />
            </Routes>
        </div>
    );
}

export default App;
