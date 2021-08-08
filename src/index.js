import { TodoList } from "./classes/todo-list.class";

import "./css/styles.css";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log("todos", todoList.todos);
