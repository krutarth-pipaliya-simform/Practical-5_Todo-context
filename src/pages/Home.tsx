import { TaskForm } from "@/components/form/TaskForm";
import { TodosProvider } from "@/components/TodosProvider";
import { TodoWrapper } from "@/components/TodoWrapper";

export const Home = () => {
    return (
        <TodosProvider>
            <TaskForm />
            <TodoWrapper />
        </TodosProvider>
    );
};
