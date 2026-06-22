import { getLocalTheme } from "@/utils/helpers/getLocalTheme";
import { createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

const themeSlice = createSlice({
    name: "theme",
    initialState: getLocalTheme(),
    reducers: {
        toggleTheme(state) {
            return state === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
