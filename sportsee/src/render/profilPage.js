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

/**
 * Component for rendering the profil page.
 * 
 * Renders all the childs components : {@link Introduction|&lt;Introduction /&gt;}, {@link AverageSessionsGraph|&lt;AverageSessionsGraph /&gt;}, {@link PerformanceGraph|&lt;PerformanceGraph /&gt;}, {@link ScoreGraph|&lt;ScoreGraph /&gt;}, {@link CountCards|&lt;CountCards /&gt;}, {@link ActivityGraph|&lt;ActivityGraph /&gt;}, {@link ErrorPage|&lt;ErrorPage /&gt;}.
 * 
 * Uses all the services to fetch, format and forward the data into the childs components.
 *
 * @component
 */

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
    const [displayDataError, setDisplayDataError] = useState(false);

    useEffect(() => {

        async function getData() {
            try {
                const userData = await DataService.GetUserData(id);
                
                // We need to check if the data actually exists because the API doesn't send back any error code but instead sends a random string saying there is no user data
                if (userData.data === undefined) {
                    setIsExistingId(false);
                } else {
                    const activityData = await DataService.GetActivityData(id);
                    const averageSessionData = await DataService.GetAverageSessionsData(id);
                    const performanceData = await DataService.GetPerformanceData(id);
                    
                    setIsExistingId(true);

                    // Saving in a state the firstName formatted data we got from the service
                    setFirstNameData(NameDataService.formatNameData(userData));

                    // Saving in a state the activity formatted data we got from the service
                    setActivityData(ActivityDataService.formatActivityData(activityData));

                    // Saving in a state the average sessions formatted data we got from the service
                    setAverageSessionsData(AverageSessionDataService.formatAverageSessionData(averageSessionData));

                    // Saving in a state the performance formatted data we got from the service
                    setPerformanceData(PerformanceDataService.formatPerformanceData(performanceData));

                    // Saving in a state the score formatted data we got from the service
                    setScoreData(ScoreDataService.formatScoreData(userData));

                    // Saving in a state the consumed count formatted data we got from the service
                    setCountData(CountDataService.formatCountData(userData));

                    // Saving in a state the information that the profile has been successfully loaded
                    setIsLoadedProfile(true);
                }
            }
            catch (err) {
                console.error(err);
                setDisplayDataError(true);
            }
        }

        getData();
    }, [id]);

    if (!isExistingId) {
        return <ErrorPage title={"Profil inconnu"} content={"La profil que vous recherchez n'existe pas..."} />
    }

    if (displayDataError) {
        return <ErrorPage title={"Erreur"} content={"Une erreur est survenue lors de la récupération des données..."} />
    }

    if (!isLoadedProfile) {
        return <p className="text-gray">Loading...</p>
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
