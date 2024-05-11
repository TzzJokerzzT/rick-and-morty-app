import { ButtonFilterProps } from "@/types/component.interface";
import { Button } from "@nextui-org/react";

const ButtonFilter = ({
  children,
  variant,
  color,
  size,
  onPress,
}: ButtonFilterProps) => {
  return (
    <Button color={color} variant={variant} size={size} onPress={onPress}>
      {children}
    </Button>
  );
};

export default ButtonFilter;
