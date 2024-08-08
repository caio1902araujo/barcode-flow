import { tv } from "tailwind-variants";

export const AsideOptionsStyles = tv({
  slots: {
    root: "flex  w-[273px] flex-col gap-5 bg-primary p-6 dark:bg-muted",
    search:
      "border-white bg-transparent text-white ring-offset-primary dark:ring-offset-muted",
    separator: "bg-white h-[0.5px]",
    listItems: "flex-1 space-y-4 overflow-y-auto pl-1",
    item: "text-lg text-muted-foreground cursor-pointer hover:text-white data-[active=true]:text-white",
  },
  variants: {
    isFullScreen: {
      true: {
        root: "h-[calc(100vh_-_90px)]",
      },
      false: {
        root: "h-[100%]",
      },
    },
  },
});

export const { item, root, search, separator, listItems } =
  AsideOptionsStyles();
