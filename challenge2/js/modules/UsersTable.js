import { qs, reset } from "./utilities.js";
import UserRow from "./UserRow.js";

let userSavedList = [];
let data = [];



export default class UsersTable {

    constructor(element) {
        this.parentElement = qs(element);
        this.userRow = new UserRow();
    }


    /** 
   Add a method to the Users class called listUsers(). It should use the getUserRow method
   from UserRow class to render the user info in a row of the users table
   */
    listUsers(users) {  
        reset(this.parentElement);
        // creating the content of the table
        users.forEach(user => {
            const newUserRow = this.userRow.getUserRow(user);
            this.parentElement.appendChild(newUserRow);
        });
    }
}


/**
 * In the Todo.js module, but not in the Todos class, create the following function
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * A todo should look like this: { id : timestamp, content: string, completed: bool }
 * @param {string} task The text of the task to be saved.
 * @param {string} key The key under which the value is stored under in LS  
 */
function saveSelectedUser(user) {
    const userObj = { id: new Date(), content: user, selected: false };
    userSavedList.push(userObj);
    this.ls.writeToLS(userSavedList);
}


function getUsers() {
    if (userSavedList.length === 0) {
        userSavedList = this.ls.readFromLS();
        // console.log(userSavedList)
    }
    return userSavedList;
}

/**
 * foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML
 * @param {string} filterType The type of filter, taken from the button's ids
 * @param {element} element The DOM element to insert our list elements into.
 */
function renderUserList(users, parentElement) {
    parentElement.innerHTML = "";
    // creating the content of the table
    const userRow = new UserRow();
    users.forEach(user => {
        parentElement.appendChild(userRow.getUserRow(user));
    });
}