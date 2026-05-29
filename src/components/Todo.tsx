import { TodoHandlerContext } from "./ContextWrapper";
import type { TodoHandlerContextType } from "./types";
import { Button } from "./ui/button";
import { useMyContext } from "@/hooks/useMyContext";

export const Todo = ({ todo: { title, timeCreated, isComplete, id } }: { todo: TodoType }) => {
    const { deleteTodo, toggleTodo } = useMyContext<TodoHandlerContextType>(TodoHandlerContext);
    return (
        <div className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted">
            <div>
                <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="isComplete"
                    checked={isComplete}
                    onChange={() => {
                        toggleTodo(String(id));
                    }}
                />
            </div>

            <div className="flex-1 overflow-x-auto">
                <div className="font-medium ">{title}</div>

                <div className="text-sm text-muted-foreground">{timeCreated}</div>
            </div>

            <Button
                onClick={() => {
                    deleteTodo(id);
                }}
                className="transition-colors hover:bg-red-500 cursor-pointer hover:text-white"
            >
                Delete
            </Button>
        </div>
    );
};

export interface TodoType {
    id: string;
    title: string;
    timeCreated: string;
    isComplete: boolean;
}
