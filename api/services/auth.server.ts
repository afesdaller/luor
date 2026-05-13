import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { authService } from "./auth.service";
import { AuthUser } from "../types";

export const getMe = cache(async (): Promise<AuthUser | null> => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("luor_session");
  if (!sessionCookie) {
    return null;
  }

  const cookieHeader = `${sessionCookie.name}=${sessionCookie.value}`;
  const res = await authService.me(cookieHeader);

  if (res.responseType === "SUCCESS") {
    return res.data ?? null;
  }
  return null;
});
