import type { DispatchType, RootStateType } from "../store";
import { toggleTheme } from "./themeSlice";

export const toggleThemeThunk = () => (dispatch: DispatchType, getState: () => RootStateType) => {
    dispatch(toggleTheme());

    const theme = getState().theme;
    localStorage.setItem("theme", theme);
};
