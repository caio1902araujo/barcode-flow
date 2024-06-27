import { Overlay } from "@radix-ui/react-dialog";
import React from "react";
import { overlay } from "./style";

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay ref={ref} className={overlay({ className })} {...props} />
));

DialogOverlay.displayName = Overlay.displayName;
