"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { ToggleGroupProvider, useToggleGroup } from "~/contexts/toggle";
import { ToggleStyles, item, root } from "./style";
import { VariantProps } from "tailwind-variants";

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof ToggleStyles>
>(({ className, variant = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={root({ className, variant })}
    {...props}
  >
    <ToggleGroupProvider variant={variant}>{children}</ToggleGroupProvider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export { ToggleGroup };
