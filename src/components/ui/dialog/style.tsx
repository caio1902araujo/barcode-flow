import { tv } from "tailwind-variants";

const DialogStyles = tv({
  slots: {
    overlay:
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  },
});

export const { overlay } = DialogStyles();
