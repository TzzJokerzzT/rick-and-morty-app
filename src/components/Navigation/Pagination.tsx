import { PaginationProps } from "@/types/component.interface";
import { Pagination } from "@nextui-org/react";

const PaginationNav = ({
  showControls,
  total,
  page,
  variant,
  color,
  onChange,
  className,
}: PaginationProps) => {
  return (
    <div className="col-span-2 flex flex-wrap gap-4 justify-center items-end">
      <Pagination
        showControls={showControls}
        total={total}
        page={page}
        variant={variant}
        color={color}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default PaginationNav;
