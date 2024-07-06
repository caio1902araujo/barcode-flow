"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup
      type="single"
      onValueChange={(value) => setTheme(value)}
      className="gap-1"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Toggle Light Theme"
        className={theme === "light" ? "bg-background text-foreground" : ""}
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle Dark Theme"
        className={theme === "dark" ? "bg-background text-foreground" : ""}
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ToggleTheme;
