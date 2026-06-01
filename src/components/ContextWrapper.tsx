import { useMemo, type PropsWithChildren } from "react";
import { useTodoState } from "@/hooks/useTodoState";
import { TodoHandlerContext, TodoStateContext } from "@/hooks/useMyContext";

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
