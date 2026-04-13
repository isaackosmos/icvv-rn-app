import { api } from "./api";

export interface Child {
  id: string;
  name: string;
  age?: number;
  parentName: string;
  parentPhone: string;
  status: "checkin" | "checkout";
  room?: string;
  allergies?: string;
  observations?: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  ageRange?: string;
}

export const kidsService = {
  getChildren: () => api.get<Child[]>("/kids/children"),
  addChild: (data: Omit<Child, "id" | "status">) =>
    api.post<Child>("/kids/children", data),
  checkin: (childId: string, room: string) =>
    api.post<void>(`/kids/children/${childId}/checkin`, { room }),
  checkout: (childId: string) =>
    api.post<void>(`/kids/children/${childId}/checkout`, {}),
  deleteChild: (childId: string) =>
    api.delete<void>(`/kids/children/${childId}`),
  getRooms: () => api.get<Room[]>("/kids/rooms"),
};
