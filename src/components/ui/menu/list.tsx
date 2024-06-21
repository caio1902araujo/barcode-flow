"use client";
import React from "react";
import { List } from "@radix-ui/react-navigation-menu";
import { list, MenuStyles } from "./style";
import { VariantProps } from "tailwind-variants";

export interface ListProps
  extends React.ComponentPropsWithoutRef<typeof List>,
    VariantProps<typeof MenuStyles> {}

export const MenuList = React.forwardRef<
  React.ElementRef<typeof List>,
  ListProps
>(({ className, direction, ...props }, ref) => (
  <List ref={ref} className={list({ className, direction })} {...props} />
));
MenuList.displayName = List.displayName;
