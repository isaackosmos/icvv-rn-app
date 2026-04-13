import { api } from "./api";

export interface NewsItem {
  id: string;
  title: string;
  excerpt?: string;
  image?: string;
  date: string;
}

export const newsService = {
  getAll: (page = 1) => api.get<NewsItem[]>(`/news?page=${page}`),
  getById: (id: string) => api.get<NewsItem>(`/news/${id}`),
};
