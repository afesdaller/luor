"use client";
import { TelegramUser } from "@/api/types";
import TelegramIcon from "./TelegramIcon";
import { authService } from "@/api/services/auth.service";
import { useAuthStore } from "@/utils/zustand/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Enter() {
  const router = useRouter();
  const authStore = useAuthStore();

  return (
    <div className="glass-background flex w-full flex-col items-center gap-2 p-4">
      <p
        className="text-shadow animate-shimmer text-center text-2xl"
        style={{
          backgroundImage:
            "linear-gradient(110deg, var(--foreground) 40%, color-mix(in srgb, var(--dark-blue), transparent 90%) 50%, var(--foreground) 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "200% 0%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Дозволь собі сяяти більше.
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
          animationDelay: "2s",
        }}
      >
        Авторизуйся, щоб накопичувати бонуси з кожною покупкою.
      </p>
      <button
        // onClick={() => tg()}
        className="group animate-pulse-scale mt-4 cursor-pointer"
      >
        <TelegramIcon className="text-light-green text-shadow size-14 transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
}
