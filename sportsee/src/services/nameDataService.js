class NameDataService {
    // Firstname of user data formatting
    static formatNameData(userData) {     
        return {
            "firstName": userData.data.userInfos.firstName,
        };
    }
}

export default NameDataService;
