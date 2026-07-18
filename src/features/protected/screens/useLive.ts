import { useState, useEffect, useRef } from "react";

import { useAuthenticatedUser } from "@/context/AuthContext";
import { chatService, ChatMessage } from "@/services/chat";

export function useLive() {
  const user = useAuthenticatedUser();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetchMessages();
    intervalRef.current = setInterval(fetchMessages, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  async function fetchMessages() {
    try {
      const data = await chatService.getMessages();
      setMessages(data);
    } catch {
      // silencioso — chat é secundário
    }
  }

  async function handleSend() {
    if (!text.trim() || sending) return;
    setSending(true);
    try {
      await chatService.sendMessage(
        user.email,
        user.name ?? "Membro",
        text.trim(),
      );
      setText("");
      fetchMessages();
    } catch {
      console.error("Erro ao enviar mensagem");
    } finally {
      setSending(false);
    }
  }

  return { messages, text, setText, sending, handleSend, user };
}
