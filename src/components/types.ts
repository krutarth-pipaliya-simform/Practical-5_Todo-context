export interface TodoType {
    id: string;
    title: string;
    timeCreated: string;
    isComplete: boolean;
}

export type TodoHandlerContextType = {
    createTodo: (newTodo: TodoType) => void;
    deleteTodo: (todoId: string) => void;
    toggleTodo: (todoId: string) => void;
};

export interface RadioGroupProps {
    label: string;
    value: string;
}
