class PerformanceDataService {
    static formatPerformanceData(performanceData) {
        function formatKind(kind) {
            switch (kind) {
                case "cardio":
                    return "Cardio";
                case "energy":
                    return "Énergie";
                case "endurance":
                    return "Endurance";
                case "strength":
                    return "Force";
                case "speed":
                    return "Vitesse";
                case "intensity":
                    return "Intensité";
                default:
                    return "";
            }
        }

        let formattedData = [];

        performanceData.data.data.map((item) => {
            return formattedData.push({
                "value": item.value,
                "label": formatKind(performanceData.data.kind[item.kind])
            });
        });

        return formattedData;
    }
}

export default PerformanceDataService;
