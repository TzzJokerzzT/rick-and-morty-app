import { InputSearchProps } from "@/types/component.interface";
import { Input } from "@nextui-org/react";

const InputSearch = ({
  type,
  label,
  size,
  className,
  placeholder,
  onChange,
  value,
}: InputSearchProps) => {
  return (
    <>
      <Input
        type={type}
        label={label}
        size={size}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputSearch;
