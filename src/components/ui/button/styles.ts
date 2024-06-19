import { tv } from "tailwind-variants";

export const ButtonStyles = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-4 py-2",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      outline:
        "border border-primary bg-background hover:bg-primary hover:text-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
