import { memo, useState } from "react";
import { Button } from "../ui/button";
import { FormField } from "./FormField";
import { useTodoContext } from "@/hooks/useTodoContext";

export const TaskForm = memo(() => {
    const { createTodo } = useTodoContext();
    const [mode, setMode] = useState(() => document.body.classList.contains("dark"));

    return (
        <header className="p-4 flex gap-4">
            <Button
                className=""
                variant="outline"
                onClick={() => {
                    document.body.classList.toggle("dark");
                    setMode(!mode);
                }}
            >
                {mode ? "Dark" : "Light"} Mode
            </Button>
            <form
                className="flex-1 flex gap-4"
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
        </header>
    );
});
