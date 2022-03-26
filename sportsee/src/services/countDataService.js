import { faFireFlameCurved, faDrumstickBite, faAppleWhole, faBurger } from "@fortawesome/free-solid-svg-icons";

class CountDataService {
    // User consumed count data formatting
    static formatCountData(userData) {       
        return [
            {
                "count": `${userData.data.keyData.calorieCount}kCal`,
                "label": "Calories",
                "iconBg": "bg-vermilionOpac",
                "iconColor": "text-primary",
                "icon": faFireFlameCurved
            },
            {
                "count": `${userData.data.keyData.proteinCount}g`,
                "label": "Protéines",
                "iconBg": "bg-blueOpac",
                "iconColor": "text-blue",
                "icon": faDrumstickBite
            },
            {
                "count": `${userData.data.keyData.carbohydrateCount}g`,
                "label": "Glucides",
                "iconBg": "bg-yellowOpac",
                "iconColor": "text-yellow",
                "icon": faAppleWhole
            },
            {
                "count": `${userData.data.keyData.lipidCount}g`,
                "label": "Lipides",
                "iconBg": "bg-pinkOpac",
                "iconColor": "text-pink",
                "icon": faBurger
            }
        ];
    }
}

export default CountDataService;
