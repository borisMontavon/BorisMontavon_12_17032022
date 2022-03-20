import { apiCall } from "../services/apiService";
import { USER_ROUTE, ACTIVITY_ROUTE, AVERAGE_SESSIONS_ROUTE, PERFORMANCE_ROUTE } from "../config/routeConfig";

class DataService {
    // Return the data of the current user from the API
    static async GetUserData(userId) {
        return await apiCall({"route": USER_ROUTE, "userId": userId});
    }

    // Return the activity data of the current user from the API
    static async GetActivityData(userId) {
        return await apiCall({"route": ACTIVITY_ROUTE, "userId": userId});
    }

    // Return the average session data of the current user from the API
    static async GetAverageSessionsData(userId) {
        return await apiCall({"route": AVERAGE_SESSIONS_ROUTE, "userId": userId});
    }

    // Return the performance data of the current user from the API
    static async GetPerformanceData(userId) {
        return await apiCall({"route": PERFORMANCE_ROUTE, "userId": userId});
    }
}

export default DataService;
