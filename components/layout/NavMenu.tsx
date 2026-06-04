"use client";
import { BookHeart, CircleUser, Heart, HouseHeart, ShoppingCart } from "lucide-react";
import NavButton from "./NavButton";
import { usePathname } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  iconClassName: string;
}
export default function NavMenu({ className, iconClassName }: Props) {
  const pathname = usePathname();
  const tNavMenu = useTranslations("NavMenu");
  return (
    <nav className={`flex h-full items-center justify-evenly ${className}`}>
      <NavButton
        active={pathname === "/"}
        href="/"
        icon={<HouseHeart className={iconClassName} />}
        title={tNavMenu("home")}
      />
      <NavButton
        active={pathname === "/catalog"}
        href="/catalog"
        icon={<BookHeart className={iconClassName} />}
        title={tNavMenu("catalog")}
      />
      <NavButton
        active={pathname === "/favorites"}
        href="/favorites"
        icon={<Heart className={iconClassName} />}
        title={tNavMenu("favorites")}
      />
      <NavButton
        active={pathname === "/basket"}
        href="/basket"
        icon={<ShoppingCart className={iconClassName} />}
        title={tNavMenu("basket")}
      />
      <NavButton
        active={pathname === "/profile"}
        href="/profile"
        icon={<CircleUser className={iconClassName} />}
        title={tNavMenu("profile")}
      />
    </nav>
  );
}
