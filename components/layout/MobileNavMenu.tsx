"use client";
import { motion } from "motion/react";
import NavMenu from "./NavMenu";

export default function MobileNavMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="border-light-blue bg-dark-coffee fixed bottom-0 left-0 z-50 h-18 w-full rounded-tl-4xl border-t lg:hidden"
    >
      <NavMenu iconClassName="size-7 stroke-1" />
    </motion.div>
  );
}
