"use client";
import TelegramIcon from "./TelegramIcon";
import { motion } from "motion/react";

export default function Enter() {
  const loginUrl = () => {
    const botId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID;
    const origin = window.location.origin;
    const returnTo = `${origin}/auth/callback`;

    return `https://oauth.telegram.org/auth?bot_id=${botId}&origin=${origin}&embed=0&return_to=${returnTo}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="glass-background mt-2 flex flex-col items-center gap-2 p-2 sm:p-5">
        <motion.p
          className="text-outline mt-4 text-center text-2xl font-bold"
          style={{
            backgroundImage:
              "linear-gradient(110deg, var(--background) 40%, var(--shadow-light-blue) 50%, var(--background) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Дозволь собі сяяти більше.
        </motion.p>
        <motion.p
          className="text-outline text-center font-bold"
          style={{
            backgroundImage:
              "linear-gradient(110deg, var(--background) 40%, var(--shadow-light-blue) 50%, var(--background) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            delay: 1,
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Авторизуйся, щоб накопичувати бонуси з кожною покупкою.
        </motion.p>
        <motion.button
          onClick={() => (window.location.href = loginUrl())}
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
          <TelegramIcon className="text-background text-outline size-16 drop-shadow-[0_0_8px_rgba(5,74,95,0.6)] transition-transform group-hover:scale-110" />
        </motion.button>
      </div>
    </div>
  );
}
