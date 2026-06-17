import { TaskForm } from "@/components/form/TaskForm";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TodosProvider } from "@/components/TodosProvider";
import { TodoWrapper } from "@/components/TodoWrapper";

export const Home = () => {
    return (
        <ThemeProvider>
            <TodosProvider>
                <TaskForm />
                <TodoWrapper />
            </TodosProvider>
        </ThemeProvider>
    );
};
