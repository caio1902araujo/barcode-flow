import React from "react";
import { description } from "./style";
import { Description as SheetPrimitive } from "@radix-ui/react-dialog";

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive>
>(({ className, ...props }, ref) => (
  <SheetPrimitive ref={ref} className={description({ className })} {...props} />
));
SheetDescription.displayName = SheetPrimitive.displayName;
