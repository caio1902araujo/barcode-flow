import { tv } from "tailwind-variants";

export const ToggleStyles = tv({
  slots: {
    root: "flex items-center justify-center transition-colors gap-1",
    item: "rounded-sm text-sm font-medium ring-offset-background transition-colors hover:bg-background text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-primary",
  },

  variants: {
    variant: {
      default: {
        root: "bg-muted rounded-md h-10 p-1",
        item: "p-2",
      },
      outline: {
        root: "bg-transparent rounded-md h-10 px-3",
        item: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export const { root, item } = ToggleStyles();
