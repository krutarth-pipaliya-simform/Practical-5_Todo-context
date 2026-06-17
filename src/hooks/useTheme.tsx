import { createContext, useContext } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const themeData = useContext(ThemeContext);

    if (!themeData) throw new Error("Please wrap the component in the provider");

    return themeData;
};
