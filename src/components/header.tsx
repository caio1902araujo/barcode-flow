"use client";
import Image from "next/image";
import FullLogo from "~/assets/full-logo.svg";
import FullLogoLight from "~/assets/full-logo-light.svg";
import Logo from "~/assets/logo.svg";
import ToggleTheme from "./toggle-theme";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="flex h-[90px] w-full items-center justify-between border-b-2 border-b-muted px-8 py-7 transition-colors md:px-24">
      <Link href="/">
        <Image
          src={theme === "light" ? FullLogo : FullLogoLight}
          alt="Logo"
          className="w-36 md:w-52"
        />
      </Link>

      <section className="flex items-center gap-8">
        <nav className="hidden items-center gap-6 sm:flex">
          <span className="cursor-pointer text-lg font-medium text-foreground">
            Gerador
          </span>
          <span className="cursor-pointer text-lg text-muted-foreground hover:text-foreground">
            Editor
          </span>
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
