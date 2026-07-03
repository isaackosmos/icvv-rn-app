import { api } from "./api";

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  address: string;
  category: string;
  image?: string;
  price?: string;
}

export const eventsService = {
  getAll: () => api.get<Event[]>("/events"),
  getById: (id: string) => api.get<Event>(`/events/${id}`),
};
