import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getLocalstorageTodos } from "@/utils/helpers/getLocalTodos";
import type { TodoType } from "@/components/types";
import { validTodos } from "@/utils/helpers/validTodos";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: getLocalstorageTodos(),
    reducers: {
        createTodo: (state, action: PayloadAction<TodoType>) => {
            return validTodos([...state, action.payload]);
        },

        toggleTodo: (state, action: PayloadAction<string>) => {
            return validTodos(
                state.map((todo) =>
                    todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo,
                ),
            );
        },

        deleteTodo: (state, action: PayloadAction<string>) => {
            return validTodos(state.filter((todo) => todo.id !== action.payload));
        },
    },
});

export const { createTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
