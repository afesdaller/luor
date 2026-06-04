"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const luor = {
  bg: "#1c110c", // основной какао
  bgDeep: "#170e0a", // нижний край градиента
  peach: "#F8B58A", // основной акцент
  peachDeep: "#E89868", // тёмный персик (тени, кнопки)
  peachSoft: "#FFD3B6", // светлый персик (хайлайты)
  text: "#FBEFE3", // кремовый текст
} as const;

interface BlobState {
  borderRadius: string;
  x: number;
  y: number;
}

const NEUTRAL: BlobState = { borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%", x: 0, y: 0 };

function getRandomState(): BlobState {
  const r = () => Math.random() * 100;
  return {
    borderRadius: `${r()}% ${r()}% ${r()}% ${r()}% / ${r()}% ${r()}% ${r()}% ${r()}%`,
    x: Math.random() * 300 - 150, // Увеличили диапазон от -150px до 150px для более заметного движения
    y: Math.random() * 100 - 50, // Увеличили диапазон от -100px до 100px
  };
}

export default function Background({ children }: Props) {
  const [blob1, setBlob1] = useState({ current: NEUTRAL, next: NEUTRAL });
  const [blob2, setBlob2] = useState({ current: NEUTRAL, next: NEUTRAL });
  const [blob3, setBlob3] = useState({ current: NEUTRAL, next: NEUTRAL });

  const handleAnimationComplete = () => {
    setBlob1({
      current: blob1.next,
      next: getRandomState(),
    });
  };

  return (
    <div className="from-coffee to-dark-coffee relative h-full min-h-screen w-full overflow-hidden bg-linear-to-b">
      {children}
      {/* Обертка-контейнер отвечает за центрирование (left-1/2 -translate-x-1/2) */}
      <div className="absolute top-[-10%] left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 sm:h-[40vw] sm:w-[40vw]">
        {/* motion.div теперь анимирует x и y относительно этого центра во все стороны */}
        <motion.div
          animate={{
            borderRadius: [blob1.current.borderRadius, blob1.next.borderRadius],
            x: [blob1.current.x, blob1.next.x],
            y: [blob1.current.y, blob1.next.y],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
          }}
          onAnimationComplete={handleAnimationComplete}
          className="h-full w-full bg-[radial-gradient(circle,var(--color-peach),var(--color-dark-coffee))] opacity-40 blur-2xl"
        />
      </div>

      {/* 
      <div className="blob2 absolute top-1/3 left-0 h-[70vw] w-[70vw] bg-[radial-gradient(circle,var(--color-peach),var(--color-dark-coffee))] opacity-40 sm:h-[40vw] sm:w-[40vw]" /> */}

      {/* <div className="blob3 absolute right-0 bottom-[-10%] h-[70vw] w-[70vw] bg-[radial-gradient(circle,var(--color-peach),var(--color-dark-coffee))] opacity-40 sm:h-[40vw] sm:w-[40vw]" /> */}
    </div>
  );
}
