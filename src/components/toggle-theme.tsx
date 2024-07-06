"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ToggleGroup
      type="single"
      onValueChange={(value) => setTheme(value)}
      className="gap-1"
      value={currentTheme}
    >
      <ToggleGroupItem value="light" aria-label="Toggle Light Theme">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle Dark Theme">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ToggleTheme;
