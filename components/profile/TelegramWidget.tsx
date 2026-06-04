"use client";

import { useTranslations } from "next-intl";
import TelegramIcon from "../common/icons/TelegramIcon";

interface TelegramLoginOptions {
  bot_id: string;
  request_access?: string;
  lang?: string;
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    Telegram: {
      Login: {
        auth: (options: TelegramLoginOptions, callback: (user: never) => void) => void;
      };
    };
  }
}

export default function TelegramWidget() {
  const t = useTranslations("Profile.Enter");
  const BOT_ID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID;

  const handleLogin = () => {
    if (!BOT_ID) {
      console.error("BOT_ID not found");
      return;
    }

    if (!window.Telegram?.Login) {
      console.error("Telegram script not loaded");
      return;
    }

    // const redirectUrl = encodeURIComponent(window.location.origin + "/api/auth/telegram");
    // window.location.href = `https://oauth.telegram.org/auth?bot_id=${BOT_ID}&origin=${encodeURIComponent(window.location.origin)}&return_to=${redirectUrl}`;
    console.log(document.cookie);
    window.Telegram.Login.auth({ bot_id: BOT_ID, request_access: "write", lang: "ru" }, (user) => {
      console.log(user);
      if (user) {
        console.log("User data:", user);
      } else {
        console.log("Authorization cancelled");
      }
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="group mt-4 flex cursor-pointer flex-col items-center gap-1"
    >
      <TelegramIcon className="animate-pulse-scale text-light-green text-shadow size-14 transition-transform group-hover:scale-110" />
      <p className="text-light-green text-shadow text-center">
        {t("button")}asfasfasfgagffsasasdsfasd
      </p>
    </button>
  );
}
