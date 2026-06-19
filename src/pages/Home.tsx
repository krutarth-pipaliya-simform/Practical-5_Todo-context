import { TaskForm } from "@/components/form/TaskForm";
import { TodoWrapper } from "@/components/TodoWrapper";
import { TodoProvider } from "@/store/TodoProvider";

export const Home = () => {
    return (
        <TodoProvider>
            <TaskForm />
            <TodoWrapper />
        </TodoProvider>
    );
};
