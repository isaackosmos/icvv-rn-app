import { api } from "./api";

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  image?: string;
}

export const eventsService = {
  getAll: () => api.get<Event[]>("/events"),
  getById: (id: string) => api.get<Event>(`/events/${id}`),
  register: (id: string) => api.post<void>(`/events/${id}/register`, {}),
};
