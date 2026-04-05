import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
  name?: string;
}

interface AuthContextData {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => void;
  signup: (email: string, password: string, name: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    setUser({ email });
  }

  function logout() {
    setUser(null);
  }

  async function resetPassword(email: string) {
    console.log("reset password para:", email);
  }

  async function signup(email: string, password: string, name: string) {
    setUser({ email, name });
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, resetPassword, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
