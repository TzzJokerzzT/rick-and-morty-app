import { Button } from "@nextui-org/react";
import { ButtonProps } from "@/types/component.interface";

const Btn = ({ type, children }: ButtonProps) => {
  return (
    <Button type={type} color="primary">
      {children}
    </Button>
  );
};

export default Btn;
