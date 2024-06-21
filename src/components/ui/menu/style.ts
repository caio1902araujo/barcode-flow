import { tv } from "tailwind-variants";

export const MenuStyles = tv({
  slots: {
    root: "relative z-10 flex max-w-max flex-1 items-center justify-center",
    list: "group flex flex-1 list-none ",
    link: "group inline-flex w-max text-muted-foreground items-center rounded-md p-1 font-medium transition-colors hover:text-foreground focus:text-foreground focus:outline-none disabled:pointer-events-none",
  },
  variants: {
    isActive: {
      true: { link: "text-foreground" },
    },
    direction: {
      row: {
        list: "flex-row space-x-4",
      },
      column: {
        list: "flex-col space-y-2",
      },
    },
  },
  defaultVariants: {
    direction: "row",
  },
});

export const { root, list, link } = MenuStyles();
