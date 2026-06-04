import axios from "axios";

// На сервере делаем прямой запрос к NestJS, в браузере - через прокси Next.js
const isServer = typeof window === "undefined";
const API_URL = isServer ? process.env.API_URL || "http://localhost:5000/api/v1" : "/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const ENDPOINTS = {
  me: "/auth/me",
  telegramLogin: "/auth/telegram-login",
  guestLogin: "/auth/guest-login",
  logout: "/auth/logout",
};
