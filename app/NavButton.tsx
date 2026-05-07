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
      className={`group text-outline relative flex transform-gpu flex-col items-center justify-center antialiased transition-all duration-300 backface-hidden ${
        active
          ? `text-background [&_svg]:fill-background/60 scale-110 font-bold`
          : `text-background/60 hover:text-background hover:[&_svg]:fill-background/60 hover:scale-110 hover:font-bold`
      } `}
    >
      {icon}
      {!isMobile && title && (
        <p
          className={`${active ? "text-background" : "text-background/80 group-hover:text-background"}`}
        >
          {title}
        </p>
      )}
    </Link>
  );
}
