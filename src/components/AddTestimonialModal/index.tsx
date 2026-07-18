import React, { useState } from "react";
import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { Testimonial } from "@/services/testimonial";

import styles from "./styles";

interface AddTestimonialModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: Pick<Testimonial, "content">) => Promise<void>;
}

export function AddTestimonialModal({
  visible,
  onClose,
  onSave,
}: AddTestimonialModalProps) {
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!content.trim()) return;
    setSaving(true);
    try {
      await onSave({ content });
      setContent("");
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sua Vitória</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.form}
          keyboardShouldPersistTaps="handled"
        >
          <Input
            label="Seu testemunho"
            icon="chat-bubble-outline"
            value={content}
            onChangeText={setContent}
            placeholder="Escreva aqui sua vitória..."
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />
        </ScrollView>

        <View style={styles.footer}>
          <Button
            label="Publicar Testemunho"
            onPress={handleSave}
            loading={saving}
            disabled={!content.trim()}
          />
        </View>
      </View>
    </Modal>
  );
}
