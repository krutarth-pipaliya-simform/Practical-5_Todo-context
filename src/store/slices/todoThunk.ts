import type { DispatchType, RootStateType } from "../store";
import type { TodoType } from "@/components/types";
import { createTodo, toggleTodo, deleteTodo } from "./todoSlice";

const saveTodos = (state: RootStateType) => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const createTodoThunk =
    (todo: TodoType) => (dispatch: DispatchType, getState: () => RootStateType) => {
        dispatch(createTodo(todo));
        saveTodos(getState());
    };

export const toggleTodoThunk =
    (id: string) => (dispatch: DispatchType, getState: () => RootStateType) => {
        dispatch(toggleTodo(id));
        saveTodos(getState());
    };

export const deleteTodoThunk =
    (id: string) => (dispatch: DispatchType, getState: () => RootStateType) => {
        dispatch(deleteTodo(id));
        saveTodos(getState());
    };
