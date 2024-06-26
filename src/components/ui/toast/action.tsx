import { Action } from "@radix-ui/react-toast";
import React from "react";
import { action } from "./style";

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof Action>,
  React.ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref) => (
  <Action ref={ref} className={action({ className })} {...props} />
));

ToastAction.displayName = Action.displayName;
