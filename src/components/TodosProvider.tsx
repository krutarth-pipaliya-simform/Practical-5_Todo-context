import { TodoContext } from "@/hooks/useTodoContext";
import { useTodos } from "@/hooks/useTodos";
import { useMemo, type PropsWithChildren } from "react";

export const TodosProvider = ({ children }: PropsWithChildren) => {
    const { todos, createTodo, deleteTodo, toggleTodo } = useTodos();
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
