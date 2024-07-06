import Image from "next/image";
import FullLogo from "~/assets/full-logo.svg";
import Logo from "~/assets/logo.svg";
import ToggleTheme from "./toggle-theme";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-[90px] w-full items-center justify-between border-b-2 border-b-muted px-8 py-7 md:px-24">
      <Link href="/">
        <Image src={FullLogo} alt="Logo" className="w-36 md:w-52" />
      </Link>

      <section className="flex items-center gap-8">
        <nav className="hidden items-center gap-6 sm:flex">
          <span className="cursor-pointer text-lg font-medium text-primary">
            Gerador
          </span>
          <span className="cursor-pointer text-lg text-muted-foreground hover:text-primary">
            Editor
          </span>
          <span className="cursor-pointer text-lg text-muted-foreground hover:text-primary">
            Ajuda
          </span>
        </nav>

        <ToggleTheme className="hidden sm:block" />

        <section className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex items-center">
                <Image src={Logo} alt="Logo mobile version" />
              </SheetHeader>

              <div className="flex flex-col items-center gap-6">
                <span className="cursor-pointer text-lg font-medium text-primary">
                  Gerador
                </span>
                <span className="cursor-pointer text-lg text-muted-foreground hover:text-primary">
                  Editor
                </span>
                <span className="cursor-pointer text-lg text-muted-foreground hover:text-primary">
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
