import { tv } from "tailwind-variants";

export const SheetStyles = tv({
  slots: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
    range: "absolute h-full bg-primary",
    thumb:
      "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  },
});

export const { root, track, range, thumb } = SheetStyles();
