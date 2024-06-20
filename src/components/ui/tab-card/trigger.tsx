import { Trigger } from "@radix-ui/react-tabs";
import React from "react";
import { trigger } from "./styles";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger ref={ref} className={trigger({ className })} {...props} />
));
TabsTrigger.displayName = Trigger.displayName;
