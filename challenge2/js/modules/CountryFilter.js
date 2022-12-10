import { findUniqueElements } from "./filters.js";
import {qs, reset} from "./utilities.js";

export default class CountryFilter {
    constructor(element) {
        this.parentElement = qs(element);
    }

    getValue() {
        return this.parentElement.options[this.parentElement.selectedIndex].value;
    }

    listCountries(countries) {
        reset(this.parentElement);
        // extracting a list of unique countries
        let uniqueCountries = findUniqueElements(countries);
        // clearing the current options list in the select element
        // creating the "default" option in select
        let option = document.createElement("option");
        option.innerHTML = "Select Country";
        option.setAttribute("value", "select");
        this.parentElement.appendChild(option);
        // creating the options by country
        uniqueCountries.map(country => {
            let option = document.createElement("option");
            option.innerHTML = country;
            option.setAttribute("value", country);

            this.parentElement.appendChild(option);
        });
    }

    onChange(callback) {
        this.parentElement.addEventListener("change", () => callback());
    }
}