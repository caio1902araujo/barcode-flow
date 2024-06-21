import { header } from "./style";

export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={header({ className })} {...props} />
);
SheetHeader.displayName = "SheetHeader";
