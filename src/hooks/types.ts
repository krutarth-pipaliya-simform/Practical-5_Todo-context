import type { TodoType } from "@/components/types";

export type ActionType =
    | {
          type: "ADD";
          todo: TodoType;
      }
    | {
          type: "DELETE";
          todoId: string;
      }
    | {
          type: "TOGGLE";
          todoId: string;
      };
