import { header } from "./style";

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={header({ className })} {...props} />
);

DialogHeader.displayName = "DialogHeader";
