import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  isMobile?: boolean;
  title?: string;
}

export default function NavButton({ icon, href, active, isMobile, title }: Props) {
  return (
    <Link
      href={href}
      className={`group text-shadow relative flex transform-gpu flex-col items-center justify-center antialiased transition-all duration-300 backface-hidden ${
        active
          ? `text-foreground [&_svg]:fill-background/60 scale-110 font-bold`
          : `text-foreground/60 hover:text-foreground hover:[&_svg]:fill-background/60 hover:scale-110 hover:font-bold`
      } `}
    >
      {icon}
      {!isMobile && title && (
        <p
          className={`${active ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}
        >
          {title}
        </p>
      )}
    </Link>
  );
}
