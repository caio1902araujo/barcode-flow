import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function Home() {
  return (
    <main>
      <Sheet>
        <SheetTrigger>open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Título</SheetTitle>
          </SheetHeader>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            pariatur porro, quae accusantium corrupti quibusdam sed saepe nisi
            voluptates blanditiis!
          </p>
        </SheetContent>
      </Sheet>
      <p>Geração de barcode</p>
    </main>
  );
}
