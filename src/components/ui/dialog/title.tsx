import { Title } from "@radix-ui/react-dialog";
import React from "react";
import { title } from "./style";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title ref={ref} className={title(className)} {...props} />
));

DialogTitle.displayName = Title.displayName;
