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
            title: "Sucesso",
            description: "C[odigo gerado com sucesso!",
          });
        }}
      >
        Show Toast
      </Button>
    </main>
  );
}
