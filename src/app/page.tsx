import { Bold, Italic, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle/root";

export default function Home() {
  return (
    <main>
      <p>Geração de barcode</p>

      <div className="flex items-center">
        <ToggleGroup type="single" variant="default">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Sun className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Moon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </main>
  );
}
