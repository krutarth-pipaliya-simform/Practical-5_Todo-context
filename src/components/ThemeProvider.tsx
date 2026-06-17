import { useState, type ReactNode } from "react";

import { ThemeContext } from "@/hooks/useTheme";

interface ThemeProviderPropsType {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
    const [theme, setTheme] = useState<"light" | "dark">(getLocalTheme());

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
        console.log(theme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const getLocalTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") return theme;

    localStorage.setItem("theme", "light");
    return "light";
};
