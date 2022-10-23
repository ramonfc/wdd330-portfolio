import {qs, onTouch} from "./utilities.js"
import ToDos from "./ToDos.js";

const toDo = new ToDos(".list","#todo-count-number",".todo-footer", "todos");

const button = document.querySelector("#addBtn");
onTouch(button, e=>{toDo.addTodo("#inputTask")});
