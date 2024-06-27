import { footer } from "./style";

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={footer({ className })} {...props} />
);

DialogFooter.displayName = "DialogFooter";
