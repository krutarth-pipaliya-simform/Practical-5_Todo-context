import { useSelector } from "react-redux";

import type { RootStateType } from "@/store/store";

export const useSelectorWithType = useSelector.withTypes<RootStateType>();

export const useTodos = () => {
    const todos = useSelectorWithType(({ todos }) => todos);
    return todos;
};
