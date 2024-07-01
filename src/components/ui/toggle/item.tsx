"use client";
import { Item } from "@radix-ui/react-toggle-group";
import { ToggleStyles, item } from "./style";
import { VariantProps } from "tailwind-variants";
import { useToggleGroup } from "~/contexts/toggle";
import React from "react";

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> &
    VariantProps<typeof ToggleStyles>
>(({ className, children, variant, ...props }, ref) => {
  const context = useToggleGroup();

  return (
    <Item
      ref={ref}
      className={item({ className, variant: context.variant })}
      {...props}
    >
      {children}
    </Item>
  );
});

ToggleGroupItem.displayName = Item.displayName;
