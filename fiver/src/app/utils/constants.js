export const HOST = process.env.NEXT_PUBLIC_SERVER_URL;
export const API_URL = `${HOST}/api`;
export const GET_USER_INFO = `${AUTH_ROUTES}/get-user-info`;
export const AUTH_ROUTES = `${API_URL}/auth`;
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;