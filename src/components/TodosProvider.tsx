import { TodoContext } from "@/hooks/useTodoContext";
import { useTodoState } from "@/hooks/useTodoState";
import { useMemo, type PropsWithChildren } from "react";

export const TodosProvider = ({ children }: PropsWithChildren) => {
    const { todos, createTodo, deleteTodo, toggleTodo } = useTodoState();
    const contextValue = useMemo(
        () => ({
            todos,
            createTodo,
            deleteTodo,
            toggleTodo,
        }),
        [todos, createTodo, deleteTodo, toggleTodo],
    );

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
