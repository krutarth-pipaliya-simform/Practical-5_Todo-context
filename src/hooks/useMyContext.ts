import { useContext, type Context } from "react";

export const useMyContext = <T>(Context: Context<T>) => {
    const data = useContext(Context);
    if (!data) throw new Error("Use Context inside wrapper");
    return data;
};
