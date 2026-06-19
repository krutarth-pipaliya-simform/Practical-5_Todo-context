import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import type { DispatchType, RootStateType } from "@/store/store";

export const useTodoDispatch: () => DispatchType = useDispatch;
export const useTodos: TypedUseSelectorHook<RootStateType> = useSelector;
