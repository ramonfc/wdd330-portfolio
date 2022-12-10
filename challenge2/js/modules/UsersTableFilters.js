import CountryFilter from "./CountryFilter.js";
import { filterBy2 } from "./filters.js";
import {qs} from "./utilities.js";

export default class UsersTableFilters {
    constructor(element, userTable) {
        this.parentElement = qs(element);
        this.usersTable = userTable;
        this.ageFilter = qs("#age-filter");
        this.countryFilter = new CountryFilter("#country-filter");
    }

    showTableFilters() {
        // changing the display of the element
        this.parentElement.style.display = "flex";
        // adding a new class
        this.parentElement.classList.add("style-filter");
    }

    showAgeFilter(users) {
        this.ageFilter.addEventListener("input", (event) => {
            this.#applyFilter(users);
        });
    }

    showCountriesFilter(users) {
        const countries = users.map(item => item.location.country);
        this.countryFilter.listCountries(countries);

        this.countryFilter.onChange(() => {
            this.#applyFilter(users);
        });
    }

    //private method: 
    #applyFilter(users) {
        const age = this.ageFilter.value;
        const country = this.countryFilter.getValue();
        const filteredUsers = filterBy2(users, country, age);
        this.usersTable.listUsers(filteredUsers);
    }
}