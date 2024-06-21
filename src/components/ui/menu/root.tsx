"use client";
import { Root } from "@radix-ui/react-navigation-menu";
import React from "react";
import { root } from "./style";

export const Menu = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
  <Root ref={ref} className={root({ className })} {...props}>
    {children}
  </Root>
));
Menu.displayName = Root.displayName;
