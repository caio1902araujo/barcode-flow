import { Description } from "@radix-ui/react-toast";
import React from "react";
import { description } from "./style";

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description ref={ref} className={description({ className })} {...props} />
));

ToastDescription.displayName = Description.displayName;
