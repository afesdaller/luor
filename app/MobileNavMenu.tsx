"use client";
import { usePathname } from "next/navigation";
import { BookHeart, CircleUser, Heart, HouseHeart, ShoppingBasket } from "lucide-react";
import NavButton from "./NavButton";

export default function MobileNavMenu() {
  const pathname = usePathname();

  return (
    <div className="mobile-nav-menu glass-background fixed bottom-[60px] left-1/2 z-50 h-14 w-[90%] -translate-x-1/2">
      <nav className="flex h-full items-center justify-between px-8 max-[12.5rem]:px-0">
        <NavButton
          active={pathname === "/"}
          href="/"
          icon={<HouseHeart className="size-7 stroke-1" />}
          isMobile={true}
        />
        <NavButton
          active={pathname === "/catalog"}
          href="/catalog"
          icon={<BookHeart className="size-7 stroke-1" />}
          isMobile={true}
        />
        <NavButton
          active={pathname === "/favorites"}
          href="/favorites"
          icon={<Heart className="size-7 stroke-1" />}
          isMobile={true}
        />
        <NavButton
          active={pathname === "/basket"}
          href="/basket"
          icon={<ShoppingBasket className="size-7 stroke-1" />}
          isMobile={true}
        />
        <NavButton
          active={pathname === "/profile"}
          href="/profile"
          icon={<CircleUser className="size-7 stroke-1" />}
          isMobile={true}
        />
      </nav>
    </div>
  );
}
