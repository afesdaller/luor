import { Role, User } from "@/api/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) => set({ user, isAuthenticated: user.role !== Role.GUEST }),
      logout: () => set({ isAuthenticated: false }),
    }),
    { name: "auth-store" },
  ),
);
