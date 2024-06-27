import { Content } from "@radix-ui/react-dialog";
import React from "react";
import { DialogPortal } from "./portal";
import { DialogOverlay } from "./overlay";
import { close, content } from "./style";
import { DialogClose } from "./close";
import { X } from "lucide-react";

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content ref={ref} className={content({ className })} {...props}>
      {children}
      <DialogClose className={close()}>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogClose>
    </Content>
  </DialogPortal>
));

DialogContent.displayName = Content.displayName;
