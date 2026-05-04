import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

export default function NavButton({ icon, href, active }: Props) {
  return (
    <Link
      href={href}
      className={`relative flex h-12 w-12 items-center justify-center transition-all duration-300 active:scale-90 ${
        active
          ? "text-foreground/50 scale-110 drop-shadow-[0_0_2px_rgba(192,132,252,1)] [&_svg]:!fill-purple-300/50"
          : "text-foreground/50 hover:text-zinc-700"
      }`}
    >
      {icon}
    </Link>
  );
}
