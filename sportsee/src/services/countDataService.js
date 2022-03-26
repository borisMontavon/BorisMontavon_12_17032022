import { faFireFlameCurved, faDrumstickBite, faAppleWhole, faBurger } from "@fortawesome/free-solid-svg-icons";

/**
 * Counters data formatting service.
 * @class
 */

class CountDataService {
    
    /** 
     * 
     * Formats the data fetched from the {@link USER_ROUTE|user API} into usable data for the {@link CountCards|&lt;CountCards /&gt;} component.
     * 
     * @param {Object} userData Data fetched from the API
     * @return {Array} Formatted data used by {@link CountCards|&lt;CountCards /&gt;} component
     * 
    */
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
