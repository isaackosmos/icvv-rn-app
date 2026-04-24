import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";

import styles from "./styles";

import { BIBLE_VERSES } from "@/constants/verses";

export function VerseCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BIBLE_VERSES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.verse} numberOfLines={4}>
        "{BIBLE_VERSES[index].text}"
      </Text>
      <Text style={styles.ref}>{BIBLE_VERSES[index].ref}</Text>
    </View>
  );
}
