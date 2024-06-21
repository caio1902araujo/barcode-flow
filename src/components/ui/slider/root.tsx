"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { range, root, thumb, track } from "./style";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={root({ className })} {...props}>
    <SliderPrimitive.Track className={track()}>
      <SliderPrimitive.Range className={range()} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={thumb()} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
