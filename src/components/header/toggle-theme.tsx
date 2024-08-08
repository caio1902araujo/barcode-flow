"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle";
import { Skeleton } from "../ui/skeleton";
import { useMounted } from "~/hooks/useMounted";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const { mounted } = useMounted();

  if (mounted) {
    return <Skeleton className="h-10 w-[76px]" />;
  }

  return (
    <ToggleGroup
      type="single"
      onValueChange={(value) => {
        setTheme(value);
      }}
      className="gap-1"
      defaultValue={theme}
      aria-label="Trocar de tema"
    >
      <ToggleGroupItem value="light" aria-label="tema claro">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="tema escuro">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ToggleTheme;
