import { useSelector } from "react-redux";

import type { RootStateType } from "@/store/store";

export const useTodos = () => {
    const todos = useSelector.withTypes<RootStateType>()(({ todos }) => todos);
    return todos;
};
