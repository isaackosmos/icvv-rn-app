import React from "react";

import { View, StyleSheet } from "react-native";

import { LiveChat } from "@/components/LiveChat";
import { LivePlayer } from "@/components/LivePlayer";

import { colors } from "@/constants/colors";
import { useLive } from "@/features/protected/screens/useLive";

export default function LiveScreen() {
  const { messages, text, setText, sending, handleSend, user } = useLive();

  return (
    <View style={styles.container}>
      <LivePlayer />
      <LiveChat
        messages={messages}
        text={text}
        sending={sending}
        loggedIn={!!user}
        onChangeText={setText}
        onSend={handleSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: colors.background,
  },
});
