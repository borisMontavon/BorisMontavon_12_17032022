import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "./components/horizontalNav";
import VerticalNav from "./components/verticalNav";
import DataService from "../services/dataService";
import DataFormattingService from "../services/dataFormattingService";
import Introduction from "./components/introduction";
import AverageSessionsGraph from "./components/graphs/averageSessionsGraph";
import PerformanceGraph from "./components/graphs/performanceGraph";
import ScoreGraph from "./components/graphs/scoreGraph";
import CountCards from "./components/countCards";
import ActivityGraph from "./components/graphs/activityGraph";

function ProfilPage() {
    const { id } = useParams();
    const [firstNameData, setFirstNameData] = useState({});
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [scoreData, setScoreData] = useState({});
    const [countData, setCountData] = useState([]);

    useEffect(() => {

        async function getData() {
            const userData = await DataService.GetUserData(id);

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

        getData();
    }, [id]);

    return (
        <>
            <HorizontalNav />
            <VerticalNav />
            <div className="ml-28 px-24 py-12 h-full">
                <div className="mb-14">
                    <Introduction firstNameData={firstNameData} />
                </div>
                <div className="grid grid-rows-2 grid-flow-col grid-cols-4 gap-8">
                    <div className="col-span-3">
                        <ActivityGraph activityData={activityData} />
                    </div>
                    <div className="col-span-1">
                        <AverageSessionsGraph averageSessionsData={averageSessionsData} />
                    </div>
                    <div className="col-span-1">
                        <PerformanceGraph performanceData={performanceData} />
                    </div>
                    <div className="col-span-1">
                        <ScoreGraph scoreData={scoreData} />
                    </div>
                    <div className="row-span-2">
                        <CountCards countData={countData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilPage;
