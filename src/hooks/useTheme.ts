import { useSelectorWithType } from "./useTodos";

export const useTheme = () => {
    const theme = useSelectorWithType(({ theme }) => theme);
    return theme;
};
