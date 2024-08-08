import { createContext, useContext } from "react";
import { TTabStylesContext, TabStylesContextProviderProps } from "./types";

export const TabStylesContext = createContext<TTabStylesContext>(
  {} as TTabStylesContext,
);

export const TabStylesContextProvider = ({
  children,
  styles,
}: TabStylesContextProviderProps) => {
  return (
    <TabStylesContext.Provider value={styles}>
      {children}
    </TabStylesContext.Provider>
  );
};

export const useTabStyles = () => {
  return useContext(TabStylesContext);
};
