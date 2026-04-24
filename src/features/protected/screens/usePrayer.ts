import { useState } from "react";
import { prayerService } from "@/services/prayer";

export function usePrayer() {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!request.trim()) {
      setError("Descreva seu pedido de oração.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await prayerService.send({
        name: anonymous ? undefined : name,
        request,
        anonymous,
      });
      setSubmitted(true);
    } catch {
      setError("Erro ao enviar pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setName("");
    setRequest("");
    setAnonymous(false);
    setSubmitted(false);
    setError("");
  }

  return {
    name,
    setName,
    request,
    setRequest,
    anonymous,
    setAnonymous,
    loading,
    submitted,
    error,
    handleSubmit,
    reset,
  };
}
