"use client";
import { useRef, forwardRef, useState } from "react";
import { root } from "../input/style";

const colorDefault = "#000";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputColor = forwardRef<HTMLButtonElement, InputProps>(
  ({ className, type, value, onChange, ...props }, ref) => {
    const inputColorRef = useRef<HTMLInputElement>(null);
    const [color, setColor] = useState<string>(
      (value as string) || colorDefault,
    );

    function onClick() {
      inputColorRef.current?.click();
    }

    return (
      <>
        <button
          ref={ref}
          className={root({ className: "items-end, gap-2" })}
          onClick={onClick}
        >
          <div
            className="box-content h-5 w-5 rounded-md"
            style={{ background: color }}
          ></div>
          {color}
        </button>
        <input
          type="color"
          value={value}
          onChange={(e) => {
            setColor(e.target.value);
            if (onChange) onChange(e);
          }}
          {...props}
          ref={inputColorRef}
          className="sr-only"
        />
      </>
    );
  },
);
InputColor.displayName = "InputColor";
