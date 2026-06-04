"use client";
import { useTranslations } from "next-intl";
import TelegramIcon from "../common/icons/TelegramIcon";
import { useAuthStore } from "@/lib/zustand/auth.store";
import TelegramWidget from "./TelegramWidget";

export default function Enter() {
  const t = useTranslations("Profile.Enter");
  const user = useAuthStore((state) => state.user);
  return (
    <div className="flex w-full flex-col items-center gap-2 p-4">
      <p
        className="text-shadow animate-shimmer font-caveat p-2 text-center text-3xl font-semibold"
        style={{
          backgroundImage:
            "linear-gradient(110deg, var(--foreground) 40%, color-mix(in srgb, var(--dark-blue), transparent 90%) 50%, var(--foreground) 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "200% 0%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("title")}
      </p>
      <p
        className="text-shadow animate-shimmer text-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, var(--foreground) 40%, color-mix(in srgb, var(--dark-blue), transparent 90%) 50%, var(--foreground) 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "200% 0%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDelay: "-2s",
        }}
      >
        {t("description")}
      </p>
      <TelegramWidget />
    </div>
  );
}
