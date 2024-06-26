"use client";
import { Root } from "@radix-ui/react-toast";
import * as React from "react";
import { type VariantProps } from "tailwind-variants";
import { ToastStyles, root } from "./style";

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export const Toast = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof ToastStyles>
>(({ className, variant, ...props }, ref) => {
  return <Root ref={ref} className={root({ variant, className })} {...props} />;
});

Toast.displayName = Root.displayName;
