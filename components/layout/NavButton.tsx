import { Link } from "@/lib/i18n/navigation";

interface Props {
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  title?: string;
}

export default function NavButton({ icon, href, active, title }: Props) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col items-center justify-center text-[clamp(1px,4.4vw,14px)] whitespace-nowrap antialiased transition-all duration-300 will-change-transform [&_svg]:h-[clamp(1px,8.8vw,1.75rem)] [&_svg]:w-[clamp(1px,8.8vw,1.75rem)] ${
        active
          ? `text-peach [&_svg]:fill-peach/30 scale-110 font-bold`
          : `text-foreground/80 hover:text-foreground hover:[&_svg]:fill-peach/30 hover:scale-110`
      } `}
      style={{ backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}
    >
      {icon}
      <div className="relative flex flex-col items-center">
        {/* Reserve space for bold text to prevent layout shift */}
        <span
          className="invisible block h-0 overflow-hidden font-bold select-none"
          aria-hidden="true"
        >
          {title}
        </span>
        <p
          className={`${active ? "text-foreground font-bold" : "text-foreground/80 group-hover:text-foreground group-hover:font-bold"}`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
