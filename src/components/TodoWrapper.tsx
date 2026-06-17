import { useState } from "react";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { useTheme } from "@/hooks/useTheme";

export const TodoWrapper = () => {
    const [filter, setFilter] = useState<"All" | "Completed" | "Incomplete">("All");
    const { theme } = useTheme();
    return (
        <main
            className={
                "p-4 flex flex-col flex-1 overflow-hidden " +
                (theme === "light" ? "bg-white text-black" : "bg-black text-white")
            }
        >
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList filter={filter} />
        </main>
    );
};
