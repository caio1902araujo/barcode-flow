import { TabsStyles } from "~/components/ui/tab/styles";

export type TTabStylesContext = ReturnType<typeof TabsStyles>;

export type TabStylesContextProviderProps = {
  children: React.ReactElement;
  styles: ReturnType<typeof TabsStyles>;
};
