"use client";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/toast/use-toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <main>
      <p>Geração de barcode</p>
      <Button
        onClick={() => {
          toast({
            title: "aaaa",
            description: "aaaa",
          });
        }}
      >
        Show Toast
      </Button>
    </main>
  );
}
