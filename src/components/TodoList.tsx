import { Todo } from "./Todo";
import { useTodoContext } from "@/hooks/useTodoContext";

interface TodoListProps {
    filter: string;
}

export const TodoList = ({ filter }: TodoListProps) => {
    const { todos } = useTodoContext();
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
