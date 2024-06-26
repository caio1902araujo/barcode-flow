import { Title } from "@radix-ui/react-toast";
import React from "react";
import { title } from "./style";

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title ref={ref} className={title({ className })} {...props} />
));

ToastTitle.displayName = Title.displayName;
