import { ButtonFilterProps } from "@/types/component.interface";
import { Button } from "@nextui-org/react";

const ButtonFilter = ({ children, variant, color, size, isDisable, onClick }: ButtonFilterProps) => {
  return (
    <Button color={color} variant={variant} size={size} isDisable={isDisable} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonFilter;