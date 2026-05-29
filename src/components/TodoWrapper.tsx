import { TodoStateContext } from "./ContextWrapper";
import { RadioSelection } from "./RadioSelection";
import { Todo } from "./Todo";
import { useContext, useState } from "react";

export const TodoWrapper = () => {
    const [filter, setFilter] = useState<string>("All");
    const todos = useContext(TodoStateContext);

    const RadioProps = {
        filter,
        setFilter,
        RadioGroupFieldArray: [
            {
                label: "All",
                value: "All",
            },
            {
                label: "Completed",
                value: "Completed",
            },
            {
                label: "Incomplete",
                value: "Incomplete",
            },
        ],
    };

    return (
        <main className="p-4 flex flex-col flex-1 overflow-hidden">
            <RadioSelection {...RadioProps}></RadioSelection>
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
        </main>
    );
};
