// Data from API tracked by user id

import { HOST } from "../config/hostConfig";

export async function apiCall({route, userId}) {
    route = route.replace(":userId", userId);

    const response = await fetch(HOST + route);

    return await response.json();
}