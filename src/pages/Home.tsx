import { TodoContextProvider } from "@/components/ContextWrapper";
import { TaskForm } from "@/components/form/TaskForm";
import { TodoWrapper } from "@/components/TodoWrapper";

export const Home = () => {
    return (
        <TodoContextProvider>
            <TaskForm />
            <TodoWrapper />
        </TodoContextProvider>
    );
};
