import { ContextWrapper } from "@/components/ContextWrapper";
import { TaskForm } from "@/components/form/TaskForm";
import { TodoWrapper } from "@/components/TodoWrapper";

export const Home = () => {
    return (
        <ContextWrapper>
            <header className="p-4">
                <TaskForm className="flex gap-4" />
            </header>
            <TodoWrapper />
        </ContextWrapper>
    );
};
