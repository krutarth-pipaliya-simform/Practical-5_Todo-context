import { type Dispatch, type SetStateAction } from "react";

import { RadioGroupField } from "./RadioGroupField";
import { RadioGroup } from "./ui/radio-group";

const RadioGroupFieldArray = ["All", "Completed", "Incomplete"] as const;

interface TodoFilterProps {
    filter: "All" | "Completed" | "Incomplete";
    setFilter: Dispatch<SetStateAction<"All" | "Completed" | "Incomplete">>;
}

export const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
    return (
        <RadioGroup className="flex p-4 gap-8" value={filter}>
            {RadioGroupFieldArray.map((field) => {
                return (
                    <RadioGroupField
                        onClick={() => {
                            setFilter(field);
                        }}
                        key={field}
                        label={field}
                        value={field}
                    />
                );
            })}
        </RadioGroup>
    );
};
