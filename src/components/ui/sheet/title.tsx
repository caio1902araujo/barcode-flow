import React from "react";
import { title } from "./style";
import { Title as SheetPrimitive } from "@radix-ui/react-dialog";

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive>
>(({ className, ...props }, ref) => (
  <SheetPrimitive ref={ref} className={title({ className })} {...props} />
));
SheetTitle.displayName = SheetPrimitive.displayName;
