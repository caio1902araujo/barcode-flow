"use client";
import React from "react";
import { Content } from "@radix-ui/react-tabs";
import { useTabStyles } from "~/contexts/tab-styles-context";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => {
  const { content } = useTabStyles();
  return <Content ref={ref} className={content({ className })} {...props} />;
});
TabsContent.displayName = Content.displayName;
