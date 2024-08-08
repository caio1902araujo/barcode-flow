import { item } from "./styles";

type AsideOptionsItemProps = {
  children: React.ReactNode;
};

export function AsideOptionsItem({ children }: AsideOptionsItemProps) {
  return <li className={item()}>{children}</li>;
}
