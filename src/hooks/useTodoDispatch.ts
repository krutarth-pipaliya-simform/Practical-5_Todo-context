import type { DispatchType } from "@/store/store";
import { useDispatch } from "react-redux";

export const useTodoDispatch: () => DispatchType = useDispatch;
