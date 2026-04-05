import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

export function useForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  async function handleResetPassword() {
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err: any) {
      switch (err?.code) {
        case "auth/user-not-found":
          setError("Nenhuma conta encontrada com este e-mail.");
          break;
        case "auth/invalid-email":
          setError("E-mail inválido.");
          break;
        default:
          setError("Erro ao enviar e-mail. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return { email, setEmail, error, success, loading, handleResetPassword };
}
