import { createContext, useContext } from "react";
import type { TodoType } from "@/components/types";

interface TodoContextType {
    todos: Array<TodoType>;
    createTodo: (newTodo: TodoType) => void;
    deleteTodo: (todoId: string) => void;
    toggleTodo: (todoId: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
    const data = useContext(TodoContext);
    if (!data) throw new Error("Use Context inside wrapper");
    return data;
};
