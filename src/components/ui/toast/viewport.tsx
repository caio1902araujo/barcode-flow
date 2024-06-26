import { Viewport } from "@radix-ui/react-toast";
import React from "react";
import { viewport } from "./style";

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport ref={ref} className={viewport({ className })} {...props} />
));

ToastViewport.displayName = Viewport.displayName;
