import { API_URL, customAxios } from "./interceptor";

// User routes
export const signUp = (data: any) =>
  customAxios.post(`${API_URL}/api/sign-up`, data);

export const signIn = (data: any) =>
  customAxios.post(`${API_URL}/api/sign-in`, data);

export const changePassword = (data: any) =>
  customAxios.post(`${API_URL}/users/changePassword`, data);

export const currentUser = () =>
  customAxios.get(`${API_URL}/users/currentUser`);

// Room routes
export const createRoom = (data: any) =>
  customAxios.post(`${API_URL}/api/chat_room`, data);

export const getRoomList = (data: any) =>
  customAxios.get(`${API_URL}/api/chat_rooms`, data);
