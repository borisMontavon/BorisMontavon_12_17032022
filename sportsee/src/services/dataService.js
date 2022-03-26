import { apiCall } from "../services/apiService";
import { USER_ROUTE, ACTIVITY_ROUTE, AVERAGE_SESSIONS_ROUTE, PERFORMANCE_ROUTE } from "../config/routeConfig";

/**
 * Data fetching service.
 * @class
 */

class DataService {
    
    /** 
     * 
     * Fetching the user data for a given user id.
     * 
     * @param {String} userId User id
     * @return {Object} User data
     * 
    */
    static async GetUserData(userId) {
        return await apiCall({"route": USER_ROUTE, "userId": userId});
    }

    /** 
     * 
     * Fetching the activity data for a given user id.
     * 
     * @param {String} userId User id
     * @return {Object} Activity data
     * 
    */
    static async GetActivityData(userId) {
        return await apiCall({"route": ACTIVITY_ROUTE, "userId": userId});
    }

    /** 
     * 
     * Fetching the average sessions data for a given user id.
     * 
     * @param {String} userId User id
     * @return {Object} Average sessions data
     * 
    */
    static async GetAverageSessionsData(userId) {
        return await apiCall({"route": AVERAGE_SESSIONS_ROUTE, "userId": userId});
    }

    /** 
     * 
     * Fetching the performance data for a given user id.
     * 
     * @param {String} userId User id
     * @return {Object} Performance data
     * 
    */
    static async GetPerformanceData(userId) {
        return await apiCall({"route": PERFORMANCE_ROUTE, "userId": userId});
    }
}

export default DataService;
