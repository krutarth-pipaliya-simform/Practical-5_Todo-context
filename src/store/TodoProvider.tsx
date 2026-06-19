import type { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";

interface TodoProviderPropsType {
    children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderPropsType) => {
    return <Provider store={store}>{children}</Provider>;
};
