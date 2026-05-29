import { Button } from "../ui/button";
import { FormField, type FormFieldType } from "./FormField";

interface FormProps {
    className: string;
    fields: Array<FormFieldType>;
    formAction: (formData: FormData) => void | Promise<void>;
    buttonText: string;
}

export const Form = ({ className, formAction, fields, buttonText }: FormProps) => {
    return (
        <form className={className} action={formAction}>
            {fields.map((fieldData) => (
                <FormField key={fieldData.name} {...fieldData} />
            ))}
            <Button className="transition-colors hover:bg-green-500 cursor-pointer hover:text-white">
                {buttonText}
            </Button>
        </form>
    );
};
