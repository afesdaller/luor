"use client";
import { authService } from "@/api/services/auth.service";
import { AuthUser } from "@/api/types";
import { useAuthStore } from "@/utils/zustand/auth.store";
import { useEffect } from "react";

interface Props {
  user: AuthUser | null;
}

export default function TechLayer({ user }: Props) {
  const authStore = useAuthStore();
  useEffect(() => {
    const guestLogin = async () => {
      const res = await authService.guestLogin();
      if (res.responseType === "SUCCESS" && res.data) {
        authStore.login(res.data);
      }
    };

    if (user) {
      authStore.login(user);
    } else {
      guestLogin();
    }
  }, []);

  return null;
}
