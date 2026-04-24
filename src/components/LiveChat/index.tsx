import React from "react";

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "@/constants/colors";

import { ChatMessage } from "@/services/chat";

interface LiveChatProps {
  messages: ChatMessage[];
  text: string;
  sending: boolean;
  loggedIn: boolean;
  onChangeText: (v: string) => void;
  onSend: () => void;
}

export function LiveChat({
  messages,
  text,
  sending,
  loggedIn,
  onChangeText,
  onSend,
}: LiveChatProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dot} />
        <Text style={styles.headerText}>Chat ao vivo</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messages}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.userName}>{item.userName}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Seja o primeiro a comentar!</Text>
        }
      />

      {loggedIn ? (
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={onChangeText}
            placeholder="Diga algo..."
            placeholderTextColor={colors.placeholder}
          />
          <TouchableOpacity
            style={styles.sendBtn}
            onPress={onSend}
            disabled={sending || !text.trim()}
          >
            {sending ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <MaterialIcons name="send" size={18} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.loginHint}>Faça login para participar do chat</Text>
      )}
    </View>
  );
}
