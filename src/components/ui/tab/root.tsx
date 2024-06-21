"use client";
import { Root, TabsProps as RootProps } from "@radix-ui/react-tabs";
import React from "react";
import { VariantProps } from "tailwind-variants";
import { TabsStyles } from "./styles";
import { TabStylesContextProvider } from "~/contexts/tab-styles-context";

export interface TabsProps extends RootProps, VariantProps<typeof TabsStyles> {}

export const Tabs = React.forwardRef<React.ElementRef<typeof Root>, TabsProps>(
  ({ className, variant, ...props }, ref) => {
    const styles = TabsStyles({ variant });

    return (
      <TabStylesContextProvider styles={styles}>
        <Root ref={ref} className={className} {...props} />
      </TabStylesContextProvider>
    );
  },
);

Tabs.displayName = Tabs.displayName;
