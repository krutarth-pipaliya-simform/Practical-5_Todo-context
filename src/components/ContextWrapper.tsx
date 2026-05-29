import { createContext, useMemo } from "react";
import type { TodoType } from "@/components/Todo";
import { useTodoState } from "@/hooks/useTodoState";

export const TodoStateContext = createContext<TodoType[]>(null);
export const TodoHandlerContext = createContext<{
    createTodo: (newTodo: TodoType) => void;
    deleteTodo: (todoId: string) => void;
    toggleTodo: (todoId: string) => void;
}>(null);

export const ContextWrapper = ({ children }) => {
    const { todos, createTodo, deleteTodo, toggleTodo } = useTodoState();
    const handlers = useMemo(
        () => ({
            createTodo,
            deleteTodo,
            toggleTodo,
        }),
        [createTodo, deleteTodo, toggleTodo],
    );

    return (
        <TodoStateContext.Provider value={todos}>
            <TodoHandlerContext.Provider value={handlers}>{children}</TodoHandlerContext.Provider>
        </TodoStateContext.Provider>
    );
};
