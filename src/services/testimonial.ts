import { api } from "./api";

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  category: string;
  avatar?: string;
  likes: number;
  amens: number;
  date: string;
}

export const testimonialsService = {
  getAll: () => api.get<Testimonial[]>("/testimonials"),
  create: (data: Pick<Testimonial, "name" | "content" | "category">) =>
    api.post<Testimonial>("/testimonials", data),
  like: (id: string) => api.post<void>(`/testimonials/${id}/like`, {}),
  amen: (id: string) => api.post<void>(`/testimonials/${id}/amen`, {}),
};
