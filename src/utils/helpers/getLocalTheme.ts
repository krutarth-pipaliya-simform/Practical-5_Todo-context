export const getLocalTheme = (): "light" | "dark" => {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") return theme;

    localStorage.setItem("theme", "light");
    return "light";
};
