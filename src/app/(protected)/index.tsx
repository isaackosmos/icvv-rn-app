import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  return <Redirect href={user ? "/(protected)/" : "/(auth)/login"} />;
}