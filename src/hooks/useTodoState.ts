import type { TodoType } from "@/components/Todo";
import { useCallback, useEffect, useState } from "react";

export const useTodoState = () => {
    const [todos, setTodos] = useState<TodoType[]>(getLocalstorageTodos());

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(ValidTodos(todos)));
    }, [todos]);

    const createTodo = useCallback((newTodo: TodoType) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }, []);

    const deleteTodo = useCallback((todoId: string) => {
        setTodos((prevTodos) => prevTodos.filter(({ id }) => id != todoId));
    }, []);

    const toggleTodo = useCallback((todoId: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todoId === todo.id ? { ...todo, isComplete: !todo.isComplete } : todo,
            ),
        );
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
    return parsedTodos;
}
