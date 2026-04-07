import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";

import styles from "./styles";

const VERSES = [
  {
    text: "Portanto, ide, fazei discípulos de todas as nações.",
    ref: "Mateus 28:19",
  },
  { text: "O Senhor é o meu pastor e nada me faltará.", ref: "Salmos 23:1" },
  { text: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
];

export function VerseCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % VERSES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.verse}>"{VERSES[index].text}"</Text>
      <Text style={styles.ref}>{VERSES[index].ref}</Text>
    </View>
  );
}
