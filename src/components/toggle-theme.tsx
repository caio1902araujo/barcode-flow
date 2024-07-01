"use client";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle";

const ToggleTheme = () => {
  return (
    <ToggleGroup
      type="single"
      onValueChange={(value) => alert(`SET ${value} THEME`)}
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
