import * as React from "react";
import { VariantProps } from "tailwind-variants";
import { ToggleStyles } from "~/components/ui/toggle/style";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof ToggleStyles>
>({
  variant: "default",
});

const ToggleGroupProvider: React.FC<
  VariantProps<typeof ToggleStyles> & { children: React.ReactNode }
> = ({ variant, children }) => {
  return (
    <ToggleGroupContext.Provider value={{ variant }}>
      {children}
    </ToggleGroupContext.Provider>
  );
};

const useToggleGroup = () => {
  const context = React.useContext(ToggleGroupContext);

  return context;
};

export { ToggleGroupProvider, useToggleGroup, ToggleGroupContext };
