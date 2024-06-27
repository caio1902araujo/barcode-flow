import { Description } from "@radix-ui/react-dialog";
import React from "react";
import { description } from "./style";

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description ref={ref} className={description({ className })} {...props} />
));
DialogDescription.displayName = Description.displayName;
