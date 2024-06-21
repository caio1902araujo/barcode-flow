"use client";
import { Link as LinkPrimitive } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";
import { MenuStyles, link } from "./style";
import { VariantProps } from "tailwind-variants";

export interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof MenuStyles> {}

export const MenuLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  LinkProps
>(({ children, className, isActive, ...props }) => {
  return (
    <LinkPrimitive asChild>
      <Link {...props} className={link({ className, isActive })}>
        {children}
      </Link>
    </LinkPrimitive>
  );
});
MenuLink.displayName = "MenuLink";
