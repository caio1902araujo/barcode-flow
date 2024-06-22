import * as React from "react";
import { root } from "./style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input type={type} className={root({ className })} ref={ref} {...props} />
    );
  },
);
Input.displayName = "Input";
