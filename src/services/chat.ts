import { api } from "./api";

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
}

export const chatService = {
  getMessages: () => api.get<ChatMessage[]>("/live/chat"),
  sendMessage: (userId: string, userName: string, text: string) =>
    api.post<ChatMessage>("/live/chat", { userId, userName, text }),
};
