import { api } from "./api";

export interface PrayerRequest {
  name?: string;
  request: string;
  anonymous: boolean;
}

export const prayerService = {
  send: (data: PrayerRequest) => api.post<void>("/prayer", data),
};
