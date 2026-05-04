"use client";
import { usePathname } from "next/navigation";
import { BookHeart, CircleUser, Heart, HouseHeart, ShoppingBasket } from "lucide-react";
import NavButton from "./NavButton";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="bg-background/50 fixed bottom-[60px] left-1/2 z-50 h-14 w-[90%] -translate-x-1/2 rounded-full border border-white/50 backdrop-blur-xs">
      <nav className="flex h-full items-center justify-between px-8">
        <NavButton
          active={pathname === "/"}
          href="/"
          icon={<HouseHeart className="size-6 stroke-1" />}
        />
        <NavButton
          active={pathname === "/catalog"}
          href="/catalog"
          icon={<BookHeart className="size-6 stroke-1" />}
        />
        <NavButton
          active={pathname === "/favorites"}
          href="/favorites"
          icon={<Heart className="size-6 stroke-1" />}
        />
        <NavButton
          active={pathname === "/basket"}
          href="/basket"
          icon={<ShoppingBasket className="size-6 stroke-1" />}
        />
        <NavButton
          active={pathname === "/profile"}
          href="/profile"
          icon={<CircleUser className="size-6 stroke-1" />}
        />
      </nav>
    </div>
  );
}
