import type { TodoType } from "./Todo";

export type TodoHandlerContextType = {
    createTodo: (newTodo: TodoType) => void;
    deleteTodo: (todoId: string) => void;
    toggleTodo: (todoId: string) => void;
};
