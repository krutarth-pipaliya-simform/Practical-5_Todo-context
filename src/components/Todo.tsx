import type { ActionType } from "@/hooks/useMyReducer";
import { Button } from "./ui/button";

export const Todo = ({
    title,
    timeCreated,
    isComplete,
    dispatch,
    id,
}: TodoType & { dispatch: (action: ActionType) => void }) => {
    return (
        <div className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted">
            <div>
                <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="isComplete"
                    checked={isComplete}
                    onChange={(e) => {
                        dispatch({
                            type: "UPDATE",
                            todoId: String(id),
                            todo: {
                                id: String(id),
                                isComplete: e.target.checked,
                                timeCreated,
                                title,
                            },
                        });
                    }}
                />
            </div>

            <div className="flex-1 overflow-x-auto">
                <div className="font-medium ">{title}</div>

                <div className="text-sm text-muted-foreground">{timeCreated}</div>
            </div>

            <Button
                onClick={() => {
                    dispatch({ type: "DELETE", todoId: id });
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
