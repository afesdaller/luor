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
      className={`group relative flex flex-col items-center justify-center text-[clamp(10px,3.5vw,13px)] whitespace-nowrap antialiased transition-all duration-300 will-change-transform ${
        active ? "scale-105" : "hover:scale-105"
      }`}
      style={{ backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}
    >
      {/* Glassmorphic wrapper for the icon */}
      <div
        className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border backdrop-blur-md transition-all duration-300 ${
          active
            ? `bg-coffee/10 border-light-blue shadow-[2px_4px_8px_rgba(28,17,12,0.15)] [&_svg]:fill-coffee/10`
            : `bg-transparent border-transparent group-hover:bg-coffee/5 group-hover:border-light-blue/40`
        }`}
      >
        <span className="relative z-10 flex items-center justify-center text-coffee transition-colors duration-300">
          {icon}
        </span>

        {/* Decorative inner light reflection (glassmorphic touch) */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-full border transition-colors duration-300 ${
            active ? "border-white/15" : "border-transparent group-hover:border-white/5"
          }`}
        />
      </div>

      {/* Text label */}
      <div className="relative mt-1 flex flex-col items-center">
        {/* Reserve space for bold text to prevent layout shift */}
        <span
          className="invisible block h-0 overflow-hidden font-bold select-none"
          aria-hidden="true"
        >
          {title}
        </span>
        <p
          className={`text-coffee transition-colors duration-300 ${
            active ? "font-bold opacity-100" : "font-normal opacity-75 group-hover:opacity-100 group-hover:font-bold"
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
