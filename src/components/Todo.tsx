import { useTheme } from "@/hooks/useTheme";

import type { TodoType } from "./types";
import { Button } from "./ui/button";
import { useTodoDispatch } from "@/hooks/useTodoContext";
import { deleteTodo, toggleTodo } from "@/store/slices/todoSlice";

interface TodoProps {
    todo: TodoType;
}

export const Todo = ({ todo: { title, timeCreated, isComplete, id } }: TodoProps) => {
    const dispatch = useTodoDispatch();

    const { theme } = useTheme();

    return (
        <li
            className={
                "flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted " +
                (theme === "dark" ? "hover:text-black" : null)
            }
        >
            <div>
                <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="isComplete"
                    checked={isComplete}
                    onChange={() => {
                        dispatch(toggleTodo(String(id)));
                    }}
                />
            </div>

            <div className="flex-1 overflow-x-auto">
                <div className="font-medium ">{title}</div>
                <div className="text-sm text-muted-foreground">{timeCreated}</div>
            </div>

            <Button
                onClick={() => {
                    dispatch(deleteTodo(id));
                }}
                className={
                    "transition-colors hover:bg-red-500 cursor-pointer hover:text-white " +
                    (theme === "dark"
                        ? "bg-white text-black hover:bg-black hover:text-white"
                        : "bg-black text-white hover:bg-white hover:text-black")
                }
            >
                Delete
            </Button>
        </li>
    );
};
