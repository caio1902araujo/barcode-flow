import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "~/components/ui/toast/toaster";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barcode Flow",
  description: "Site para geração de barcodess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
