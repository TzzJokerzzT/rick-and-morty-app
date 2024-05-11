import { ButtonCardsProps } from "@/types/component.interface";
import { Button } from "@nextui-org/react";

const CardsButton = ({
  color,
  radius,
  size,
  variant,
  className,
  onClick,
  children,
}: ButtonCardsProps) => {
  return (
    <Button
      color={color}
      radius={radius}
      size={size}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CardsButton;
