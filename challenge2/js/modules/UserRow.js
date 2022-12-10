import LS from "./LS.js";

/**
 * Deal with one row on the users table
 */
export default class UserRow {
    constructor() {
        this.ls = new LS("selectedUsers");
    }

    getUserRow(user) {
        let row = document.createElement("tr");

        const selectedUsers = new Set(this.ls.readFromLS());
        const userIsSelected = selectedUsers.has(user.id.value);

        let tdCheck = document.createElement("td");
        tdCheck.innerHTML = `<input type="checkbox" id="${user.id.value}" ${userIsSelected ? "checked" : ""}/>`;

        let tdName = document.createElement("td");
        tdName.innerHTML = `${user.name.first} ${user.name.last}`;

        let tdAge = document.createElement("td");
        tdAge.innerHTML = `${user.dob.age}`;

        let tdCountry = document.createElement("td");
        tdCountry.innerHTML = `${user.location.country}`;

        let tdImage = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src", user.picture.thumbnail);
        image.setAttribute("alt", `photo of ${user.name.first} ${user.name.last}`);
        tdImage.appendChild(image);

        row.append(tdCheck, tdName, tdAge, tdCountry, tdImage);


        // Save and retrieve data in local storage:
        const input = row.querySelector(`input`); // the current checkbox
        input.addEventListener("change", () => {
            const selectedUsers = new Set(this.ls.readFromLS());
            if (input.checked) {
                selectedUsers.add(user.id.value);
            } else {
                selectedUsers.delete(user.id.value);
            }
            this.ls.writeToLS(Array.from(selectedUsers));
        });

        return row;
    }
}