import { memo } from "react";

import { useTodoContext } from "@/hooks/useTodoContext";

import { Button } from "../ui/button";
import { FormField } from "./FormField";
import { useTheme } from "@/hooks/useTheme";

export const TaskForm = memo(() => {
    const { createTodo } = useTodoContext();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="p-4 flex gap-4">
            <Button className="" variant="outline" onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"} Mode
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
