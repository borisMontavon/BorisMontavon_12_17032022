class ActivityDataService {
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
