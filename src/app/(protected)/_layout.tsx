import React from "react";
import { Tabs, usePathname } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { AppHeader } from "@/components/AppHeader";

const TITLES: Record<string, string> = {
  "/": "ICVV",
  "/(protected)": "ICVV",
  "/(protected)/live": "TV ao Vivo",
  "/(protected)/support": "Atendimento",
  "/(protected)/news": "Notícias",
  "/(protected)/members": "Membros",
};

export default function ProtectedLayout() {
  const pathname = usePathname();
  const title = TITLES[pathname] ?? "ICVV";
  const isHome = pathname === "/" || pathname === "/(protected)";

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          header: () => <AppHeader title={title} showBack={!isHome} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: { borderTopColor: colors.border },
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="live"
          options={{
            title: "TV ao vivo",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="tv" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="support"
          options={{
            title: "Atendimento",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="call" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: "Notícias",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="article" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="members"
          options={{
            title: "Membros",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
