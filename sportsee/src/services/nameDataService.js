/**
 * First name data formatting service.
 * @class
 */

class NameDataService {
    
    /** 
     * 
     * Formats the data fetched from the {@link USER_ROUTE|user API} into usable data for the {@link Introduction|&lt;Introduction /&gt;} component.
     * 
     * @param {Object} userData Data fetched from the API
     * @return {Object} Formatted data used by {@link Introduction|&lt;Introduction /&gt;} component
     * 
    */
    static formatNameData(userData) {     
        return {
            "firstName": userData.data.userInfos.firstName,
        };
    }
}

export default NameDataService;
