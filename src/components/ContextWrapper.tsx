import { createContext, useMemo, type PropsWithChildren } from "react";
import type { TodoType } from "@/components/Todo";
import { useTodoState } from "@/hooks/useTodoState";
import type { TodoHandlerContextType } from "./types";

export const TodoStateContext = createContext<TodoType[] | undefined>(undefined);
export const TodoHandlerContext = createContext<TodoHandlerContextType | undefined>(undefined);

export const ContextWrapper = ({ children }: PropsWithChildren) => {
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
