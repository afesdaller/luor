"use client";
import { authService } from "@/api/services/auth.service";
import { User } from "@/api/types";
import { useAuthStore } from "@/lib/zustand/auth.store";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  user: User;
}
export default function Profile({ user }: Props) {
  const authStore = useAuthStore();
  const router = useRouter();

  async function logout() {
    authStore.logout();
    router.push("/");
    await authService.logout();
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 p-4">
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt="avatar"
          width={100}
          height={100}
          className="avatar h-25 w-25 rounded-full"
          loading="eager"
        />
      ) : (
        <div className="glass-background flex h-20 w-20 items-center justify-center rounded-full">
          <p className="text-shadow text-5xl">
            {user.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
          </p>
        </div>
      )}
      <button onClick={logout} className="text-shadow cursor-pointer text-xl">
        Вийти
      </button>
    </div>
  );
}
