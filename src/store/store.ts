import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
