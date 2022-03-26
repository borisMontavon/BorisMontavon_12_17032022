/**
 * Score data formatting service.
 * @class
 */

class ScoreDataService {
    
    /** 
     * 
     * Formats the data fetched from the {@link USER_ROUTE|user API} into usable data for the {@link ScoreGraph|&lt;ScoreGraph /&gt;} component to render a {@link https://recharts.org/en-US/api/PieChart|Pie Chart} component.
     * 
     * @param {Object} userData Data fetched from the API
     * @return {Object} Formatted data used by {@link https://recharts.org/en-US/api/PieChart|Pie Chart} component
     * 
    */
    static formatScoreData(userData) {

        // Being given that the API is returning the user's score in two different keys, we need to check which one contains the data
        function getUserScore(data) {
            return data.todayScore ? data.todayScore : data.score;
        }

        return {
            "scoreGraphData": [
                {
                    "score": getUserScore(userData.data),
                    "fill": "var(--primary)"
                },
                {
                    "score": 1 - getUserScore(userData.data),
                    "fill": "var(--card-dark)"
                }
            ],
            "scorePercentage": `${getUserScore(userData.data) * 100}%`
        };
    }
}

export default ScoreDataService;
