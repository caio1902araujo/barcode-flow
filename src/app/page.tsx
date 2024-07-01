import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle";
import ToggleTheme from "~/components/toggle-theme";

export default function Home() {
  return (
    <main>
      <p>Geração de barcode</p>

      <div className="flex items-center">
        <ToggleTheme />
      </div>
    </main>
  );
}
