import { Stack, usePathname } from "expo-router";

import { AppHeader } from "@/components/AppHeader";

const TITLES: Record<string, string> = {
  prayer: "Oração",
  bible: "Bíblia",
  "member-card": "ID Digital",
  events: "Eventos",
  testimonials: "Testemunhos",
  kids: "Kids",
  club: "Clube ICVV",
};

export default function ScreensLayout() {
  const pathname = usePathname();
  const name = pathname.split("/").pop() ?? "";

  return (
    <Stack
      screenOptions={{
        header: () => <AppHeader title={TITLES[name] ?? "ICVV"} showBack />,
      }}
    />
  );
}
