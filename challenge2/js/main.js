import UsersTable from "./modules/UsersTable.js";
import UsersService from "./modules/UsersService.js";
import UsersTableFilters from "./modules/UsersTableFilters.js";

const usersService = new UsersService(); 

(async function main() {
    let users = await usersService.getUsers();//get the users data
    let usersTable = new UsersTable("#table-content");
    let usersTableFilters = new UsersTableFilters(".filters", usersTable);

    usersTable.listUsers(users);
    usersTableFilters.showTableFilters();
    usersTableFilters.showAgeFilter(users);
    usersTableFilters.showCountriesFilter(users);
})();