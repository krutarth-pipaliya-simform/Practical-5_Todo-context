import { createContext, useContext } from "react";
import type { TodoContextType } from "@/components/types";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
    const data = useContext(TodoContext);
    if (!data) throw new Error("Use Context inside wrapper");
    return data;
};
