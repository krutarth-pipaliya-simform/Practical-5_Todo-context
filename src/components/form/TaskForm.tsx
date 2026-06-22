import { memo } from "react";

import { useTheme } from "@/hooks/useTheme";
import { useTodoDispatch } from "@/hooks/useTodoDispatch";
import { createTodo } from "@/store/slices/todoSlice";
import { toggleTheme } from "@/store/slices/themeSlice";

import { Button } from "../ui/button";
import { FormField } from "./FormField";

export const TaskForm = memo(() => {
    const theme = useTheme();
    const dispatch = useTodoDispatch();

    return (
        <header
            className={
                "p-4 flex gap-4 " +
                (theme === "dark" ? "bg-black text-white" : "bg-white text-black")
            }
        >
            <Button
                className={theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
                variant="outline"
                onClick={() => dispatch(toggleTheme())}
            >
                {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
            <form
                className="flex-1 flex gap-4"
                action={(formData: FormData) => {
                    if (String(formData.get("todo")).trim() === "") {
                        alert("please enter some text");
                        return;
                    }
                    dispatch(
                        createTodo({
                            id: crypto.randomUUID(),
                            isComplete: false,
                            timeCreated: new Date().toDateString(),
                            title: String(formData.get("todo")),
                        }),
                    );
                }}
            >
                <FormField
                    key="todo"
                    name="todo"
                    placeholder="Enter a Todo"
                    type="text"
                    isRequired={true}
                />
                <Button
                    className={
                        theme === "dark"
                            ? "bg-white text-black"
                            : "bg-black text-white" +
                              " transition-colors hover:bg-green-500 cursor-pointer hover:text-white"
                    }
                >
                    Create Todo
                </Button>
            </form>
        </header>
    );
});
