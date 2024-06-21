"use client";
import { List } from "@radix-ui/react-tabs";
import React from "react";
import { useTabStyles } from "~/contexts/tab-styles-context";

export const TabsList = React.forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => {
  const { list } = useTabStyles();
  return <List ref={ref} className={list({ className })} {...props} />;
});
TabsList.displayName = List.displayName;
