import { TaskForm } from "@/components/form/TaskForm";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TodoWrapper } from "@/components/TodoWrapper";
import { TodoProvider } from "@/store/TodoProvider";

export const Home = () => {
    return (
        <ThemeProvider>
            <TodoProvider>
                <TaskForm />
                <TodoWrapper />
            </TodoProvider>
        </ThemeProvider>
    );
};
