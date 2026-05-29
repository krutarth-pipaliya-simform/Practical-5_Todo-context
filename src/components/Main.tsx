import { type ActionType } from "@/hooks/useMyReducer";
import { RadioSelection } from "./RadioSelection";
import { Todo, type TodoType } from "./Todo";
import { useState } from "react";

export const Main = ({
    todos,
    dispatch,
}: {
    todos: TodoType[];
    dispatch: (action: ActionType) => void;
}) => {
    const [filter, setFilter] = useState<string>("All");
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
                            <Todo dispatch={dispatch} {...todo}></Todo>
                        </li>
                    ))}
            </ul>
        </main>
    );
};
