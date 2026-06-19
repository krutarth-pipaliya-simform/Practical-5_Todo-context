import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getLocalstorageTodos } from "@/utils/helpers/getLocalTodos";
import type { TodoType } from "@/components/types";
import { validTodos } from "@/utils/helpers/validTodos";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: getLocalstorageTodos(),
    reducers: {
        createTodo: (state, action: PayloadAction<TodoType>) => {
            const todos = validTodos([...state, action.payload]);
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todos = validTodos(
                state.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, isComplete: !todo.isComplete };
                    }
                    return todo;
                }),
            );
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const todos = validTodos(state.filter((todo) => todo.id != action.payload));
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        },
    },
});

export const { createTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
