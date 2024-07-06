"use client";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import FullLogoLight from "~/assets/full-logo-light.svg";
import FullLogo from "~/assets/full-logo.svg";
import ToggleTheme from "./toggle-theme";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentLogo, setCurrentLogo] = useState(FullLogoLight);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setCurrentLogo(FullLogo);
    } else if (theme === "dark") {
      setCurrentLogo(FullLogoLight);
    }
  }, [theme]);

  return (
    <header className="flex h-[90px] w-full items-center justify-between border-b-2 border-b-muted px-8 py-7 transition-colors md:px-24">
      <Link href="/">
        <Image src={currentLogo} alt="Logo" className="w-36 md:w-52" />
      </Link>

      <section className="flex items-center gap-8">
        <nav className="hidden items-center gap-6 sm:flex">
          <span className="cursor-pointer text-lg font-medium text-foreground">
            Gerador
          </span>
          <Link href="barcode/edit">
            <span className="cursor-pointer text-lg text-muted-foreground hover:text-foreground">
              Editor
            </span>
          </Link>
          <span className="cursor-pointer text-lg text-muted-foreground hover:text-foreground">
            Ajuda
          </span>
        </nav>

        <div className="hidden sm:block">
          <ToggleTheme />
        </div>

        <section className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex items-start">
                <Image
                  src={theme === "light" ? FullLogo : FullLogoLight}
                  alt="Logo"
                  className="w-36 md:w-52"
                />
              </SheetHeader>

              <div className="flex h-full flex-col items-center justify-center gap-6">
                <span className="cursor-pointer text-lg font-medium text-foreground">
                  Gerador
                </span>
                <span className="cursor-pointer text-lg text-muted-foreground hover:text-foreground">
                  Editor
                </span>
                <span className="cursor-pointer text-lg text-muted-foreground hover:text-foreground">
                  Ajuda
                </span>
              </div>
            </SheetContent>
          </Sheet>
        </section>
      </section>
    </header>
  );
};

export default Header;
