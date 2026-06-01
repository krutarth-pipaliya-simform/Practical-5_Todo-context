import { type Dispatch, type SetStateAction } from "react";
import { RadioGroupField } from "./RadioGroupField";
import { RadioGroup } from "./ui/radio-group";

export const TodoFilter = ({
    filter,
    setFilter,
}: {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
}) => {
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

const RadioGroupFieldArray = ["All", "Completed", "Incomplete"];
