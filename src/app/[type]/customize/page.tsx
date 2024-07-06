"use client";
import { useRouter, useParams, usePathname } from "next/navigation";
import { LinkComponent } from "~/components/header";
import { Button } from "~/components/ui/button";

const EditPage = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const { type } = params;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h1 className="text-5xl">Pagina de edição de {type}</h1>
      {pathname === "/qrcode/customize" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/barcode/customize")}>
            Ir para editor de BARCODE
          </Button>
          <Button onClick={() => router.push("/barcode/generate")}>
            Ir para pagina de criação de BARCODE
          </Button>
        </div>
      )}
      {pathname === "/barcode/customize" && (
        <div className="flex items-center gap-2">
          <Button onClick={() => router.replace("/qrcode/customize")}>
            Ir para editor de QRCode
          </Button>

          <Button onClick={() => router.replace("/qrcode/generate")}>
            Ir para pagina de criação de QRCode
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditPage;
