import { Role, User, AuthUser, SessionRole } from "@/api/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: AuthUser) =>
        set({ user, isAuthenticated: user.sessionRole === SessionRole.USER }),
      logout: () => set({ isAuthenticated: false }),
    }),
    { name: "auth-store" },
  ),
);
