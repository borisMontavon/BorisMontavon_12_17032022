import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataService from "../services/dataService";
import DataFormattingService from "../services/dataFormattingService";
import Introduction from "./components/introduction";
import AverageSessionsGraph from "./components/graphs/averageSessionsGraph";
import PerformanceGraph from "./components/graphs/performanceGraph";
import ScoreGraph from "./components/graphs/scoreGraph";
import CountCards from "./components/countCards";
import ActivityGraph from "./components/graphs/activityGraph";
import ProfilNotFoundPage from "./components/profilNotfoundPage";

function ProfilPage() {
    const { id } = useParams();
    const [firstNameData, setFirstNameData] = useState({});
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [scoreData, setScoreData] = useState({});
    const [countData, setCountData] = useState([]);
    const [existingId, setExistingId] = useState(false);

    useEffect(() => {

        async function getData() {
            const userData = await DataService.GetUserData(id);
            
            if (userData.data === undefined) {
                setExistingId(false);
            } else {
                setExistingId(true);

                // Saving in a state the firstName formatted data we got from the service
                setFirstNameData(DataFormattingService.formatNameData(userData));

                // Saving in a state the activity formatted data we got from the service
                setActivityData(DataFormattingService.formatActivityData(await DataService.GetActivityData(id)));

                // Saving in a state the average sessions formatted data we got from the service
                setAverageSessionsData(DataFormattingService.formatAverageSessionData(await DataService.GetAverageSessionsData(id)));

                // Saving in a state the performance formatted data we got from the service
                setPerformanceData(DataFormattingService.formatPerformanceData(await DataService.GetPerformanceData(id)));

                // Saving in a state the score formatted data we got from the service
                setScoreData(DataFormattingService.formatScoreData(userData));

                // Saving in a state the consumed count formatted data we got from the service
                setCountData(DataFormattingService.formatCountData(userData));
            }
        }

        getData();
    }, [id]);

    if (!existingId) {
        return <ProfilNotFoundPage />
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
