/**
 * Deals with data from API
 */
export default class UsersService {

    /**
     * Gets the info data from API
     * @returns {Array} users data
     */
    async getUsers() {
        const url = "https://randomuser.me/api/?results=10&seed=abc";
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            let dataList = data.results;
            return dataList;
        }
        else return [];
    } 
}