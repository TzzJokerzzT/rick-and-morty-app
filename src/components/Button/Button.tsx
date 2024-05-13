import { Button } from "@nextui-org/react";
import { ButtonProps } from "@/types/component.interface";

const ButtonSearch = ({ type, children, className, size }: ButtonProps) => {
  return (
    <Button className={className} type={type} color="primary" size={size}>
      {children}
    </Button>
  );
};

export default ButtonSearch;
