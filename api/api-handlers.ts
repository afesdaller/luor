import axios, { AxiosResponse } from "axios";
import { ERROR_CODES } from "./error-codes";

export default function handleApiError(error: unknown): ApiResponse {
  const response: ApiResponse = {
    statusCode: 500,
    errorData: { code: ERROR_CODES.SERVER_ERROR, message: "" },
    responseType: "ERROR",
  };
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.log("Error data:", error.response.data);
      response.statusCode = error.response.status;
      response.data = error.response.data;
      return response;
    }
    console.error(error.message);
    response.statusCode = 0;
    response.errorData.code = "ERROR";
    response.errorData.message = error.message;
  } else if (error instanceof Error) {
    console.error("Error:", error.message);
    response.statusCode = 0;
    response.errorData.code = "ERROR";
    response.errorData.message = `Error:, ${error.message}`;
  } else {
    console.error("Unknown error", error);
    response.statusCode = 0;
    response.errorData.code = "ERROR";
    response.errorData.message = `Unknown error:, ${error}`;
  }
  return response;
}

export function handleNotSuccessResponse<T, U>(response: AxiosResponse<T, U, object>): ApiResponse {
  const message = `Error with status code: ${response.status}`;
  console.error(message);
  return {
    responseType: "ERROR",
    statusCode: response.status,
    errorData: { code: "ERROR", message: message },
  };
}

export function handleSuccessResponse<T>(data: T, statusCode: number = 200): ApiResponse<T> {
  return {
    responseType: "SUCCESS",
    statusCode,
    errorData: {},
    data,
  };
}

export type ApiResponse<T = null> = {
  responseType: "SUCCESS" | "ERROR";
  statusCode: number;
  errorData: {
    code?: string;
    message?: string;
  };
  data?: T;
};
