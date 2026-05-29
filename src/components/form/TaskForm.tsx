import { memo, useContext } from "react";
import { Button } from "../ui/button";
import { FormField } from "./FormField";
import { TodoHandlerContext } from "../ContextWrapper";

export const TaskForm = memo(({ className }: { className: string }) => {
    const { createTodo } = useContext(TodoHandlerContext);
    console.log("form ");
    return (
        <form
            className={className}
            action={(formData: FormData) => {
                if (String(formData.get("todo")).trim() === "") {
                    alert("please enter some text");
                    return;
                }
                createTodo({
                    id: crypto.randomUUID(),
                    isComplete: false,
                    timeCreated: new Date().toDateString(),
                    title: String(formData.get("todo")),
                });
            }}
        >
            <FormField
                key="todo"
                name="todo"
                placeholder="Enter a Todo"
                type="text"
                isRequired={true}
            />
            <Button className="transition-colors hover:bg-green-500 cursor-pointer hover:text-white">
                Create Todo
            </Button>
        </form>
    );
});
