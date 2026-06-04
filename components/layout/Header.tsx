"use client";
import LogoIcon from "../common/icons/LogoIcon";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-dark-coffee fixed top-0 left-0 z-50 flex h-18 w-full items-center justify-between rounded-br-4xl border-b lg:h-25 lg:rounded-b-4xl">
      <LogoIcon
        className="fill-light-blue -z-1 -ml-1 h-12 w-auto sm:h-20"
        titleColor="var(--peach)"
      />
      <div className="mr-4 flex items-center gap-4 sm:mr-6 lg:gap-8">
        <SearchBar />
        <NavMenu className="hidden lg:flex lg:gap-6" iconClassName="size-6 stroke-1" />
      </div>
    </header>
  );
}
