import { Close } from "@radix-ui/react-toast";
import React from "react";
import { close } from "./style";
import { X } from "lucide-react";

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
  <Close ref={ref} className={close({ className })} toast-close="" {...props}>
    <X className="h-4 w-4" />
  </Close>
));

ToastClose.displayName = Close.displayName;
