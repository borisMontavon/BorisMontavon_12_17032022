/**
 * Activity data formatting service.
 * @class
 */

class ActivityDataService {

    /** 
     * 
     * Formats the data fetched from the {@link ACTIVITY_ROUTE|activity API} into usable data for the {@link ActivityGraph|&lt;ActivityGraph /&gt;} to render a {@link https://recharts.org/en-US/api/BarChart|Bar Chart}.
     * 
     * @param {Object} activityData Data fetched from the API
     * @return {Array} Formatted data used by {@link https://recharts.org/en-US/api/BarChart|Bar Chart} component
     * 
    */
    static formatActivityData(activityData) {
        let formattedData = [];

        activityData.data.sessions.map((activity) => {
            return formattedData.push({
                ...activity,
                "tooltipKilogram": `${activity.kilogram}kg`,
                "tooltipCalories": `${activity.calories}Kcal`
            });
        })

        return formattedData;
    }
}

export default ActivityDataService;
