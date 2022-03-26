class AverageSessionDataService {
    // Average sessions duration data formatting
    static formatAverageSessionData(averageSessionData) {
        let formattedData = [];

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
