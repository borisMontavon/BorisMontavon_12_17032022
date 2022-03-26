import { HOST } from "../config/hostConfig";

/**
 * Function to call an API.
 * @function
 * 
 * @param {String} route API route
 * @param {String} userId User id
 * @return {Object} Data in json format
 * 
 */

export async function apiCall({route, userId}) {
    // We define here the route and the userId
    route = route.replace(":userId", userId);

    const response = await fetch(HOST + route);

    return await response.json();
}
