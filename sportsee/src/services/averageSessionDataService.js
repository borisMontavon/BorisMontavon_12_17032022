/**
 * Average sessions data formatting service.
 * @class
 */

class AverageSessionDataService {
    
    /** 
     * 
     * Formats the data fetched from the {@link AVERAGE_SESSIONS_ROUTE|average session API} into usable data for the {@link AverageSessionsGraph|&lt;AverageSessionsGraph /&gt;} to render a {@link https://recharts.org/en-US/api/LineChart|Line Chart}.
     * 
     * @param {Object} averageSessionData Data fetched from the API
     * @return {Array} Formatted data used by {@link https://recharts.org/en-US/api/LineChart|Line Chart} component
     * 
    */
    static formatAverageSessionData(averageSessionData) {
        let formattedData = [];

        // Formats numbers into matching day label
        function formatDay(day) {
            switch(day) {
                case 1:
                    return "L";
                case 2:
                    return "M";
                case 3:
                    return "M";
                case 4:
                    return "J";
                case 5:
                    return "V";
                case 6:
                    return "S";
                case 7:
                    return "D";
                default:
                    return "";
            }
        }

        averageSessionData.data.sessions.map((session) => {
            return formattedData.push({
                "day": formatDay(session.day),
                "sessionLength": session.sessionLength,
                "tooltip": `${session.sessionLength} min`
            });
        });

        return formattedData;
    }
}

export default AverageSessionDataService;
