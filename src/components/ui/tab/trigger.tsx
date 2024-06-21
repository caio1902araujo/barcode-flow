"use client";

import React from "react";
import { Trigger } from "@radix-ui/react-tabs";
import { useTabStyles } from "~/contexts/tab-styles-context";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => {
  const { trigger } = useTabStyles();
  return <Trigger ref={ref} className={trigger({ className })} {...props} />;
});
TabsTrigger.displayName = Trigger.displayName;
