import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./slices/todoSlice";
import { themeReducer } from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        theme: themeReducer,
    },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
