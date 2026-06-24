import type { TodoType } from "@/components/types";

export function validTodos(todos: TodoType[]) {
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
