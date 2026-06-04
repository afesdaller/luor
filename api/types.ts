export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export interface User {
  id: string;
  guestId?: string;
  role: Role;
  firstName?: string;
  lastName?: string;
  telegramId?: number;
  telegramUsername?: string;
  phone?: string;
  city?: string;
  postOffice?: string;
  avatar?: string;
  birthday?: Date;
}

export enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER",
  GUEST = "GUEST",
}
