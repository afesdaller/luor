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
      className={`group text-shadow relative flex flex-col items-center justify-center antialiased transition-all duration-300 ${
        active
          ? `text-foreground [&_svg]:fill-foreground/40 scale-110`
          : `text-foreground/80 hover:text-foreground hover:[&_svg]:fill-foreground/40 hover:scale-110`
      } `}
      style={{ backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}
    >
      {icon}
      {!isMobile && title && (
        <div className="relative flex flex-col items-center">
          {/* Reserve space for bold text to prevent layout shift */}
          <span className="invisible block h-0 overflow-hidden select-none" aria-hidden="true">
            {title}
          </span>
          <p
            className={`${active ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}
          >
            {title}
          </p>
        </div>
      )}
    </Link>
  );
}
