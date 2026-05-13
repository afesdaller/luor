"use client";
import { AnimatePresence, motion } from "motion/react";
import { AuthUser, SessionRole } from "@/api/types";
import Enter from "./Enter";
import Profile from "./Profile";

interface Props {
  user?: AuthUser | null;
}

export default function ProfileWrapper({ user }: Props) {
  const isAuthorized = user && user.sessionRole !== SessionRole.GUEST;

  return (
    <div className="relative w-full overflow-x-hidden pb-4">
      <AnimatePresence mode="wait" initial={false}>
        {isAuthorized ? (
          <motion.div
            key="profile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full"
          >
            <Profile user={user} />
          </motion.div>
        ) : (
          <motion.div
            key="enter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full"
          >
            <Enter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
