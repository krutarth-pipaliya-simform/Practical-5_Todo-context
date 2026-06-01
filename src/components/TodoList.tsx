import { useTodoStateContext } from "@/hooks/useMyContext";
import { Todo } from "./Todo";

export const TodoList = ({ filter }: { filter: string }) => {
    const todos = useTodoStateContext();
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
                    <li key={todo.id}>
                        <Todo todo={todo} />
                    </li>
                ))}
        </ul>
    );
};
