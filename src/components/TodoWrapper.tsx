import { useState } from "react";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";

export const TodoWrapper = () => {
    const [filter, setFilter] = useState<"All" | "Completed" | "Incomplete">("All");

    return (
        <main className="p-4 flex flex-col flex-1 overflow-hidden">
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList filter={filter} />
        </main>
    );
};
