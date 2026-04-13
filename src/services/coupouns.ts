import { api } from "./api";

export interface Coupon {
  id: string;
  companyName: string;
  category: string;
  discount: string;
  description: string;
  expiryDate: string;
  logo?: string;
  terms?: string;
}

export const couponsService = {
  getAll: () => api.get<Coupon[]>("/coupons"),
  submit: (data: Omit<Coupon, "id">) => api.post<Coupon>("/coupons", data),
};
