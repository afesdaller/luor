"use client";
import { authService } from "@/api/services/auth.service";
import { User } from "@/api/types";
import { useAuthStore } from "@/lib/zustand/auth.store";
import Script from "next/script";
import { useEffect } from "react";

interface Props {
  user: User | null;
}

export default function TechLayer({ user }: Props) {
  const authStore = useAuthStore();

  useEffect(() => {
    if (user) {
      authStore.login(user);
    }
  }, []);

  return <Script src="https://telegram.org/js/telegram-widget.js?22" strategy="afterInteractive" />;
}
