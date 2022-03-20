import { faFireFlameCurved, faDrumstickBite, faAppleWhole, faBurger } from "@fortawesome/free-solid-svg-icons";

class DataFormattingService {
    // User consumed count data formatting
    static formatCountData(userData) {       
        return [
            {
                "count": `${userData.data.keyData.calorieCount}kCal`,
                "label": "Calories",
                "iconBg": "bg-vermilion",
                "iconColor": "text-primary",
                "icon": faFireFlameCurved
            },
            {
                "count": `${userData.data.keyData.proteinCount}g`,
                "label": "Protéines",
                "iconBg": "bg-blue",
                "iconColor": "text-primary",
                "icon": faDrumstickBite
            },
            {
                "count": `${userData.data.keyData.carbohydrateCount}g`,
                "label": "Glucides",
                "iconBg": "bg-yellow",
                "iconColor": "text-primary",
                "icon": faAppleWhole
            },
            {
                "count": `${userData.data.keyData.lipidCount}g`,
                "label": "Lipides",
                "iconBg": "bg-pink",
                "iconColor": "text-primary",
                "icon": faBurger
            }
        ];
    }

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

    // Firstname of user data formatting
    static formatNameData(userData) {     
        return {
            "firstName": userData.data.userInfos.firstName,
        };
    }

    static formatActivityData(activityData) {
        return activityData.data.sessions;
    }

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

export default DataFormattingService;
