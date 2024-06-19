import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonStyles } from "./styles";
import { VariantProps } from "tailwind-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={ButtonStyles({ className, variant })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
