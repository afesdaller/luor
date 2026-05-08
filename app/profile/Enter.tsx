"use client";
import TelegramIcon from "./TelegramIcon";
import { motion } from "motion/react";

interface TelegramUser {
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
        auth: (
          options: { bot_id: string; request_access: string; embed?: number },
          callback: (user: TelegramUser | false) => void,
        ) => void;
      };
    };
  }
}

export default function Enter() {
  const handleLogin = () => {
    const botId: string | undefined = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID;
    if (typeof window !== "undefined" && window.Telegram?.Login && botId) {
      window.Telegram.Login.auth(
        {
          bot_id: botId,
          request_access: "write",
          embed: 1,
        },
        async (data) => {
          if (!data) return;
          console.log(data);
          // const response = await fetch('/api/auth/telegram', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(data),
          // });

          // if (response.ok) {
          //   window.location.href = "/profile";
          // }
        },
      );
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="glass-background mt-2 flex flex-col items-center gap-2 p-2 sm:p-5">
        <motion.p
          className="text-shadow mt-4 text-center text-2xl"
          style={{
            backgroundImage:
              "linear-gradient(110deg, var(--foreground) 40%, var(--shadow-light-blue) 50%, var(--foreground) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Дозволь собі сяяти більше.
        </motion.p>
        <motion.p
          className="text-shadow text-center"
          style={{
            backgroundImage:
              "linear-gradient(110deg, var(--foreground) 40%, var(--shadow-light-blue) 50%, var(--foreground) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            delay: 1.6,
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Авторизуйся, щоб накопичувати бонуси з кожною покупкою.
        </motion.p>
        <motion.button
          onClick={handleLogin}
          className="group my-4 cursor-pointer"
          animate={{
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            times: [0, 0.2, 0.3, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          <TelegramIcon className="text-foreground text-shadow size-16 transition-transform group-hover:scale-110" />
        </motion.button>
      </div>
    </div>
  );
}
