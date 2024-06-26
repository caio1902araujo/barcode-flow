import { tv } from "tailwind-variants";

export const SheetStyles = tv({
  slots: {
    overlay:
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close:
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
    icon: "h-4 w-4",
    header: "flex flex-col space-y-2 text-center sm:text-left",
    title: "text-lg font-semibold text-foreground",
    description: "text-sm text-muted-foreground",
    content:
      "fixed z-50 gap-4 bg-background p-6 shadow-lg overflow-y-auto transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:p-4",
  },
  variants: {
    side: {
      top: {
        content:
          "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      },
      bottom: {
        content:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      },
      left: {
        content:
          "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      },
      right: {
        content:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
  },
});

export const { close, content, header, title, description, icon, overlay } =
  SheetStyles();
