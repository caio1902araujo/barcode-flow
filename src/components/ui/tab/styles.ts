import { tv } from "tailwind-variants";

export const TabsStyles = tv({
  slots: {
    trigger:
      "inline-flex items-center justify-center whitespace-nowrap font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
    content:
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    list: "inline-flex items-center justify-center text-muted-foreground",
  },
  variants: {
    variant: {
      card: {
        trigger:
          "bg-muted rounded-t-xl px-5 py-3 text-base border-2 border-muted border-b-0 data-[state=active]:bg-transparent",
        content: "rounded-xl rounded-tr-none border-2 border-muted",
        list: "gap-1",
      },
      basic: {
        trigger: "bg-transparent text-sm",
        content: "mt-5",
        list: "gap-4",
      },
    },
  },
  defaultVariants: {
    variant: "card",
  },
});
