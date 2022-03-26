/**
 * Performance data formatting service.
 * @class
 */

class PerformanceDataService {

    /** 
     * 
     * Formats the data fetched from the {@link PERFORMANCE_ROUTE|performance API} into usable data for the {@link PerformanceGraph|&lt;PerformanceGraph /&gt;} component to render a {@link https://recharts.org/en-US/api/RadarChart|Radar Chart}.
     * 
     * @param {Object} performanceData Data fetched from the API
     * @return {Array} Formatted data used by {@link https://recharts.org/en-US/api/RadarChart|Radar Chart} component
     * 
    */
    static formatPerformanceData(performanceData) {
        
        // Translates english labels into french labels
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
