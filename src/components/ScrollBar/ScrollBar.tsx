import { ScrollBarProps } from "@/types/component.interface";
import { ScrollShadow } from "@nextui-org/react";

const ScrollBar = ({
  size,
  hideScrollBar,
  className,
  children,
}: ScrollBarProps) => {
  return (
    <ScrollShadow
      size={size}
      hideScrollBar={hideScrollBar}
      className={className}
    >
      {children}
    </ScrollShadow>
  );
};

export default ScrollBar;
