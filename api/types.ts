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
  role: Role[];
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

export interface AuthUser extends User {
  sessionRole: SessionRole;
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

export enum SessionRole {
  USER = "USER",
  GUEST = "GUEST",
}
