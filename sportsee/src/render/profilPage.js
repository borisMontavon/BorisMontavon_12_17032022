import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Services imports
import DataService from "../services/dataService";
import CountDataService from "../services/countDataService";
import ScoreDataService from "../services/scoreDataService";
import NameDataService from "../services/nameDataService";
import ActivityDataService from "../services/activityDataService";
import AverageSessionDataService from "../services/averageSessionDataService";
import PerformanceDataService from "../services/performanceDataService";

// Components
import Introduction from "./components/introduction";
import AverageSessionsGraph from "./components/graphs/averageSessionsGraph";
import PerformanceGraph from "./components/graphs/performanceGraph";
import ScoreGraph from "./components/graphs/scoreGraph";
import CountCards from "./components/countCards";
import ActivityGraph from "./components/graphs/activityGraph";
import ErrorPage from "./errorPage";

function ProfilPage() {
    const { id } = useParams();
    const [firstNameData, setFirstNameData] = useState({});
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [scoreData, setScoreData] = useState({});
    const [countData, setCountData] = useState([]);
    const [isExistingId, setIsExistingId] = useState(true);
    const [isLoadedProfile, setIsLoadedProfile] = useState(false);

    useEffect(() => {

        async function getData() {
            const userData = await DataService.GetUserData(id);
            
            if (userData.data === undefined) {
                setIsExistingId(false);
            } else {
                setIsExistingId(true);

                // Saving in a state the firstName formatted data we got from the service
                setFirstNameData(NameDataService.formatNameData(userData));

                // Saving in a state the activity formatted data we got from the service
                setActivityData(ActivityDataService.formatActivityData(await DataService.GetActivityData(id)));

                // Saving in a state the average sessions formatted data we got from the service
                setAverageSessionsData(AverageSessionDataService.formatAverageSessionData(await DataService.GetAverageSessionsData(id)));

                // Saving in a state the performance formatted data we got from the service
                setPerformanceData(PerformanceDataService.formatPerformanceData(await DataService.GetPerformanceData(id)));

                // Saving in a state the score formatted data we got from the service
                setScoreData(ScoreDataService.formatScoreData(userData));

                // Saving in a state the consumed count formatted data we got from the service
                setCountData(CountDataService.formatCountData(userData));

                // Saving in a state the information that the profile has been successfully loaded
                setIsLoadedProfile(true);
            }
        }

        getData();
    }, [id]);

    if (!isExistingId) {
        return <ErrorPage title={"Profil inconnu"} content={"La profil que vous recherchez n'existe pas..."} />
    }

    if (!isLoadedProfile) {
        return <p className="text-white">Loading...</p>
    }

    return (
        <div className="pr-24 pl-52 pt-36 pb-12 h-full">
            <div className="mb-14">
                <Introduction firstNameData={firstNameData} />
            </div>
            <div className="grid grid-rows-4 xl:grid-rows-2 grid-flow-col grid-cols-2 xl:grid-cols-4 gap-8">
                <div className="col-span-2 xl:col-span-3">
                    <ActivityGraph activityData={activityData} />
                </div>
                <div className="col-span-2 xl:col-span-1">
                    <AverageSessionsGraph averageSessionsData={averageSessionsData} />
                </div>
                <div className="xl:col-span-1">
                    <PerformanceGraph performanceData={performanceData} />
                </div>
                <div className="xl:col-span-1">
                    <ScoreGraph scoreData={scoreData} />
                </div>
                <div className="row-span-2 h-full">
                    <CountCards countData={countData} />
                </div>
            </div>
        </div>
    );
}

export default ProfilPage;
