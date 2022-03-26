class ScoreDataService {
    // Ongoing score data formatting
    static formatScoreData(userData) {
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
