import { api, ENDPOINTS } from "../api";
import handleApiError, {
  ApiResponse,
  handleNotSuccessResponse,
  handleSuccessResponse,
} from "../api-handlers";
import { TelegramUser, AuthUser } from "../types";

class AuthService {
  async guestLogin(): Promise<ApiResponse<AuthUser | null>> {
    try {
      const result = await api.post<AuthUser>(ENDPOINTS.guestLogin);
      if (result.status == 200 || result.status == 201) {
        console.log("Guest Login: ", result.data);
        return handleSuccessResponse(result.data, result.status);
      }
      return handleNotSuccessResponse(result);
    } catch (error) {
      return handleApiError(error);
    }
  }

  async me(cookieHeader?: string): Promise<ApiResponse<AuthUser | null>> {
    try {
      const result = await api.get<AuthUser>(ENDPOINTS.me, {
        ...(cookieHeader ? { headers: { Cookie: cookieHeader } } : {}),
      });
      if (result.status == 200) {
        console.log("Me: ", result.data);
        return handleSuccessResponse(result.data, result.status);
      }
      return handleNotSuccessResponse(result);
    } catch (error) {
      return handleApiError(error);
    }
  }

  async telegramLogin(telegramData: TelegramUser): Promise<ApiResponse<AuthUser | null>> {
    try {
      const result = await api.post<AuthUser>(ENDPOINTS.telegramLogin, telegramData);
      if (result.status == 200 || result.status == 201) {
        console.log("Telegram Login: ", result.data);
        return handleSuccessResponse(result.data, result.status);
      }
      return handleNotSuccessResponse(result);
    } catch (error) {
      return handleApiError(error);
    }
  }

  async logout(): Promise<ApiResponse<null>> {
    try {
      const result = await api.post(ENDPOINTS.logout);
      if (result.status == 200 || result.status == 201) {
        console.log("Logout: ", result.data);
        return handleSuccessResponse(null, result.status);
      }
      return handleNotSuccessResponse(result);
    } catch (error) {
      return handleApiError(error);
    }
  }
}

export const authService = new AuthService();
