import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
  name?: string;
}

interface AuthContextData {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    setUser({ email });
  }

  async function signup(email: string, password: string, name: string) {
    setUser({ email, name });
  }

  async function logout() {
    setUser(null);
  }

  async function resetPassword(email: string) {
    console.log("reset para:", email);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
