import { Todo } from "./Todo";
import { useTodos } from "@/hooks/useTodos";

interface TodoListProps {
    filter: string;
}

export const TodoList = ({ filter }: TodoListProps) => {
    const todos = useTodos();
    return (
        <ul className="flex-1 pt-4 overflow-y-auto ">
            {todos
                .filter(
                    ({ isComplete }) =>
                        filter === "All" ||
                        (filter === "Completed" && isComplete) ||
                        (filter === "Incomplete" && !isComplete),
                )
                .map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
        </ul>
    );
};
