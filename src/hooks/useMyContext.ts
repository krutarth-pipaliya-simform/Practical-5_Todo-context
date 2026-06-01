import type { TodoType } from "@/components/types";
import type { TodoHandlerContextType } from "@/components/types";
import { createContext, useContext } from "react";

export const TodoStateContext = createContext<TodoType[] | undefined>(undefined);

export const useTodoStateContext = () => {
    const data = useContext(TodoStateContext);
    if (!data) throw new Error("Use Context inside wrapper");
    return data;
};

export const TodoHandlerContext = createContext<TodoHandlerContextType | undefined>(undefined);

export const useTodoHandlerContext = () => {
    const data = useContext(TodoHandlerContext);
    if (!data) throw new Error("Use Context inside Wrapper");
    return data;
};
