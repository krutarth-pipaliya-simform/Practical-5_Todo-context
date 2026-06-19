import { validTodos } from "./validTodos";

export function getLocalstorageTodos() {
    let todos = localStorage.getItem("todos");

    if (todos === null) {
        localStorage.setItem("todos", JSON.stringify([]));
        todos = JSON.stringify([]);
    }

    const parsedTodos = JSON.parse(todos ?? "");

    if (!(parsedTodos instanceof Array)) {
        throw new Error("Localstorage has tempered data");
    }
    return validTodos(parsedTodos);
}
