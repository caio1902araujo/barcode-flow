"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

const TypePage = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const { type } = params;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h1 className="text-5xl">Pagina de criação de {type}</h1>

      {pathname === "/qrcode" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/barcode")}>
            Ir para pagina de BARCODE
          </Button>

          <Button onClick={() => router.push("/barcode/edit")}>
            Ir para editor de QRCODE
          </Button>
        </div>
      )}

      {pathname === "/barcode" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/qrcode")}>
            Ir para pagina de QRCODE
          </Button>

          <Button onClick={() => router.push("/qrcode/edit")}>
            Ir para editor de BARCODE
          </Button>
        </div>
      )}
    </div>
  );
};

export default TypePage;
