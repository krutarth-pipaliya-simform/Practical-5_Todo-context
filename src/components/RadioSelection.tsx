import { type Dispatch, type SetStateAction } from "react";
import { RadioGroupField, type RadioGroupProps } from "./RadioGroupField";
import { RadioGroup } from "./ui/radio-group";

export const RadioSelection = ({
    filter,
    setFilter,
    RadioGroupFieldArray,
}: {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    RadioGroupFieldArray: RadioGroupProps[];
}) => {
    return (
        <>
            <RadioGroup className="flex p-4" value={filter}>
                {RadioGroupFieldArray.map((field) => {
                    return (
                        <RadioGroupField
                            onClick={() => {
                                setFilter(field.value);
                            }}
                            key={field.label}
                            {...field}
                        ></RadioGroupField>
                    );
                })}
            </RadioGroup>
        </>
    );
};
