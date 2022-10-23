import { qs, onTouch } from "./utilities.js";
import { readFromLS, writeToLS } from "./ls.js";

let todoList = [];

export default class ToDos {
    /**
     * in the constructor you should set a variable with the element our todo list will be built in, 
     * and the key we will use to read/write from localStorage
     * @param {string} element the element our todo list will be built in
     * @param {string} keyLS the key we will use to read/write from localStorage
     */
    constructor(element, countNumberElement,buttonsContainerElement, keyLS) {
        this.parentElement = qs(element);
        this.countNumberElement = qs(countNumberElement);
        this.buttonsContainerElement = qs(buttonsContainerElement);
        this.key = keyLS;

        this.filterType = "all";
        this.listTodos();
        this.filterTodos();
    }

    /**
     * Add a method to the Todos class called addTodo. 
     * It should grab the input in the html where users enter the text of the task, 
     * then send that along with the key to a SaveTodo() function. Then update the 
     * display with the current list of tasks
     */
    addTodo(input) {
        const task = qs(input);
        saveTodo(task.value, this.key);
        this.listTodos();
        task.focus();
        task.value = "";
    }



    /** 
    Add a method to the Todos class called listTodos(). It should use the renderTodoList 
    function to output our todo list when called.
   It should get called when a todo is added, or removed, and when the Todos class is instantiated.
    */
    listTodos() {
        renderTodoList(getTodos(this.key), this.filterType, this.parentElement, this.countNumberElement);
        this.completeTodo();
        this.removeTodo();
       
    }

    /**
     * Complete Todos.completeTodo()
     */
    completeTodo() {
        toComplete(this.parentElement, this.countNumberElement, this.key);
    }

    /**
     * Complete Todos.removeTodo()
     */
    removeTodo() {
        removeTask(this.parentElement, this.countNumberElement, this.key);
    }

    /**
     * Complete Todos.filterTodos()
     */
    filterTodos() {    
         selectFilter(this.buttonsContainerElement.querySelectorAll("button"), this );
    }
}


/**
 * In the Todo.js module, but not in the Todos class, create the following function
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * A todo should look like this: { id : timestamp, content: string, completed: bool }
 * @param {string} task The text of the task to be saved.
 * @param {string} key The key under which the value is stored under in LS  
 */
function saveTodo(task, key) {
    // const todo = new ToDos(".list", key);
    const todo = { id: new Date(), content: task, completed: false };
    todoList.push(todo);
    writeToLS(key, todoList);
}


/**
 * In the Todos.js module, but not in the Todos class create the following function
 * check the contents of todoList, a local variable containing a list of ToDos. 
 * If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS
 * @returns {array} The value as an array of objects
 */
function getTodos(key) {
    if (todoList.length === 0) {
        todoList = readFromLS(key);
        // console.log(todoList)
    }
    return todoList;
}



/**
 * foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML
 * @param {string} filterType The type of filter, taken from the button's ids
 * @param {element} element The DOM element to insert our list elements into.
 * @param {element} countNumberElement The DOM element (span) to relate the counter of left task
 */
function renderTodoList(list,filterType, element, countNumberElement) {
    element.innerHTML = "";
    renderTodoCounter(list, countNumberElement);
    list.filter(getFilter(filterType)).forEach((todo, idx) => {
        let li = document.createElement("li");
        li.setAttribute("class", "li-item");
        li.innerHTML = `
        <input type ="checkbox" id= "${todo.id}" name= "item${idx}" ${todo.completed ? "checked" : ""} />
        <label for= "${todo.id}" id= "${todo.id}_label" class=${todo.completed ? "todo-item-strike" : ""}>${todo.content}</label>
        <button class="remove-itemBtn" id="${todo.id}_btn">&#10060;</button>
        `;
        element.appendChild(li);
    });
}

/**
 * 
 * @param {string} filterType The type of filter, taken from the button's ids
 * @returns {function} function to perform the filter
 */
function getFilter(filterType){
    switch(filterType){
        case "all":
            return ()=>true;
        case "active":
            return item => !item.completed;
        case "completed":
            return item => item.completed;
        default:
            return ()=>true;
    }
}

function toComplete(element, countNumberElement, key) {
    const childrenArray = Array.from(element.children);

    childrenArray.forEach(child => {
        onTouch(child.querySelector("input"), e => {
            let id = e.target.id.split("_")[0];
            // let id = e.target.id;
            console.log(id)
            let changed = document.getElementById(`${id}_label`);

            changed.classList.toggle("todo-item-strike");
            // const selected = todoList.find((todo, idx) => `item${idx}` == id);
            todoList.find((todo, idx) => `${todo.id}` == id).completed = !todoList.find((todo, idx) => `${todo.id}` == id).completed;
            writeToLS(key, todoList);
            renderTodoCounter(todoList, countNumberElement)
        });
    });
}


function removeTask(element,countNumberElement, key) {
    const childrenArray = Array.from(element.children);    
    childrenArray.forEach(child => {
        onTouch(child.querySelector("button"), e => {
          
            let id = e.target.id.split("_")[0];
            console.log(id)
            const taskId = todoList.find((todo, idx) => `${todo.id}` == id);
            console.log("taskId: ", taskId)
            const idx = todoList.indexOf(taskId);
            todoList.splice(idx, 1);
            element.removeChild(child);
            writeToLS(key, todoList); 
            renderTodoCounter(todoList, countNumberElement);           
        });
    });
}


function renderTodoCounter(list, countNumberElement){
    countNumberElement.innerHTML = list.filter(item => !item.completed).length;
}



function selectFilter(elementBtns, todo ){ 
    elementBtns.forEach(child => {
        onTouch(child, e => {
            let id = e.target.id;
            console.log(id)
            // let changed = document.getElementById(`${id}`);
            // if(changed.classList.contains("todo-button--select")){
            //     changed.classList.remove("todo-button--select")
            // }else{
            //     changed.classList.add("todo-button--select") 
            // }
            // changed.classList.toggle("todo-button--select");
            todo.filterType = id;
            todo.listTodos();
        });
    });
}