"use client";
import { useTheme } from "next-themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import FullLogoLight from "~/assets/full-logo-light.svg";
import FullLogo from "~/assets/full-logo.svg";
import { useMounted } from "~/hooks/useMounted";
import { Skeleton } from "../ui/skeleton";

type ThemeSystem = "light" | "dark";

const ImageTheme: Record<ThemeSystem, StaticImport> = {
  light: FullLogo,
  dark: FullLogoLight,
};

export function Logo() {
  const { theme } = useTheme();
  const { mounted } = useMounted();

  if (mounted) {
    return <Skeleton className="h-[34px] w-52" />;
  }

  return (
    <Image
      src={ImageTheme[theme as ThemeSystem]}
      alt="Logo"
      className="w-36 md:w-52"
    />
  );
}
