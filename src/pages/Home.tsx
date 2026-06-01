import { ContextWrapper } from "@/components/ContextWrapper";
import { CreateTask } from "@/components/CreateTask";
import { TodoWrapper } from "@/components/TodoWrapper";

export const Home = () => {
    return (
        <ContextWrapper>
            <CreateTask />
            <TodoWrapper />
        </ContextWrapper>
    );
};
