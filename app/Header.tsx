"use client";
import { BookHeart, CircleUser, Heart, HouseHeart, Search, ShoppingBasket } from "lucide-react";
import LogoIcon from "./LogoIcon";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="header fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-center px-2 sm:h-25 sm:px-5">
      <nav className="flex w-full items-center justify-center gap-4 rounded-full px-6 py-1 sm:justify-between sm:gap-6 sm:px-8 sm:py-2">
        <div className="hidden flex-1 justify-end gap-6 sm:flex">
          <NavButton
            href="/"
            active={pathname === "/"}
            icon={<HouseHeart className="size-8 stroke-1" />}
            title="Головна"
          />
          <NavButton
            href="/catalog"
            active={pathname === "/catalog"}
            icon={<BookHeart className="size-8 stroke-1" />}
            title="Каталог"
          />
          <NavButton
            href="/profile"
            active={pathname === "/profile"}
            icon={<CircleUser className="size-8 stroke-1" />}
            title="Профіль"
          />
        </div>
        <Link href="/" className="flex shrink-0 flex-col items-center">
          <LogoIcon className="text-logo-color h-8 w-8 min-w-12 drop-shadow-[1px_1px_1px_rgba(5,74,95,0.7)] sm:h-12 sm:w-12" />
          <p className="text-shadow text-logo-color">Luor</p>
        </Link>
        <div className="hidden flex-1 justify-start gap-6 sm:flex">
          <NavButton
            href="/search"
            active={pathname === "/search"}
            icon={<Search className="size-8 stroke-1" />}
            title="Пошук"
          />
          <NavButton
            href="/favorites"
            active={pathname === "/favorites"}
            icon={<Heart className="size-8 stroke-1" />}
            title="Обране"
          />

          <NavButton
            href="/basket"
            active={pathname === "/basket"}
            icon={<ShoppingBasket className="size-8 stroke-1" />}
            title="Кошик"
          />
        </div>
      </nav>
    </header>
  );
}
