import { Input } from "@nextui-org/react";
import { InputProps } from "@/types/component.interface";
const InputLogin = ({
  type,
  label,
  placeholder,
  defaultValue,
  onChange,
}: InputProps) => {
  return (
    <>
      <Input
        isRequired
        type={type}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="max-w-xs my-2"
        onChange={onChange}
      />
    </>
  );
};

export default InputLogin;
