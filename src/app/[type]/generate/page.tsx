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

      {pathname === "/qrcode/generate" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/barcode/generate")}>
            Ir para pagina de BARCODE
          </Button>

          <Button onClick={() => router.push("/qrcode/customize")}>
            Ir para editor de QRCODE
          </Button>
        </div>
      )}

      {pathname === "/barcode/generate" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/qrcode/generate")}>
            Ir para pagina de QRCODE
          </Button>

          <Button onClick={() => router.push("/barcode/customize")}>
            Ir para editor de BARCODE
          </Button>
        </div>
      )}
    </div>
  );
};

export default TypePage;
