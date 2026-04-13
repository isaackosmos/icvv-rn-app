import { api } from "./api";

export interface Member {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  birthDate?: string;
  baptismDate?: string;
  ministry?: string;
  smallGroup?: string;
  role?: string;
  photo?: string;
  memberSince?: string;
}

export const membersService = {
  getProfile: () => api.get<Member>("/members/me"),
  updateProfile: (data: Partial<Member>) =>
    api.put<Member>("/members/me", data),
};
