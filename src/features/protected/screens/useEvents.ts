import { useState, useEffect } from "react";

import { eventsService, Event } from "@/services/events";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await eventsService.getAll();
        setEvents(data);
      } catch {
        console.error("Erro ao buscar eventos");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return { events, loading };
}
