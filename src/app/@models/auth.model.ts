export interface AuthResponse {
  token: string;
  refreshToken: string;
}

export interface AuthErrorResponse {
  errorCode: number;
  message: string;
  status: number;
}
