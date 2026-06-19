import { getLocalTheme } from "@/utils/helpers/getLocalTheme";
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "themeSlice",
    initialState: getLocalTheme(),
    reducers: {
        toggleTheme: (theme) => {
            if (theme === "light") {
                localStorage.setItem("theme", "dark");
                return "dark";
            } else {
                localStorage.setItem("theme", "light");
                return "light";
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
