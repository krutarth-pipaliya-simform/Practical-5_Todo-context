import { TodoContextProvider } from "@/components/TodoContextProvider";
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
