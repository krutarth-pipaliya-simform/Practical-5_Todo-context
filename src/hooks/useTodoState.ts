import { useCallback, useEffect, useReducer } from "react";
import type { TodoType } from "@/components/types";
import type { ActionType } from "./types";

export const useTodoState = () => {
    const [todos, dispatch] = useReducer(reducer, getLocalstorageTodos());

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(ValidTodos(todos)));
    }, [todos]);

    const createTodo = useCallback((Todo: TodoType) => {
        dispatch({
            type: "ADD",
            todo: Todo,
        });
    }, []);

    const deleteTodo = useCallback((todoId: string) => {
        dispatch({ type: "DELETE", todoId });
    }, []);

    const toggleTodo = useCallback((todoId: string) => {
        dispatch({
            type: "TOGGLE",
            todoId,
        });
    }, []);

    return { todos, createTodo, deleteTodo, toggleTodo };
};

function ValidTodos(todos: TodoType[]) {
    const today = new Date();

    return todos.filter(({ timeCreated }) => {
        const dateCreated = new Date(timeCreated);

        return (
            dateCreated.getDate() === today.getDate() &&
            dateCreated.getMonth() === today.getMonth() &&
            dateCreated.getFullYear() === today.getFullYear()
        );
    });
}

function getLocalstorageTodos() {
    let todos = localStorage.getItem("todos");

    if (todos === null) {
        localStorage.setItem("todos", JSON.stringify([]));
        todos = JSON.stringify([]);
    }

    const parsedTodos = JSON.parse(todos ?? "");

    if (!(parsedTodos instanceof Array)) {
        throw new Error("Localstorage has tempered data");
    }
    return ValidTodos(parsedTodos);
}

const reducer = (prevState: TodoType[], action: ActionType) => {
    let returnArray;

    switch (action.type) {
        case "ADD":
            returnArray = [...prevState, action.todo];
            break;

        case "DELETE":
            returnArray = prevState.filter((todo) => todo.id !== action.todoId);
            break;

        case "TOGGLE":
            returnArray = prevState.map((todo) =>
                todo.id !== action.todoId ? todo : { ...todo, isComplete: !todo.isComplete },
            );
            break;

        default:
            throw new Error("Please use proper Action");
    }

    return ValidTodos(returnArray);
};
