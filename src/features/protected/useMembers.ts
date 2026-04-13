import { useState, useEffect } from "react";

import { Member, membersService } from "@/services/members";

export function useMembers() {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    birthDate: "",
    ministry: "",
    smallGroup: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    setLoading(true);
    try {
      const data = await membersService.getProfile();
      setMember(data);
      setForm({
        name: data.name ?? "",
        phone: data.phone ?? "",
        address: data.address ?? "",
        birthDate: data.birthDate ?? "",
        ministry: data.ministry ?? "",
        smallGroup: data.smallGroup ?? "",
      });
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const updated = await membersService.updateProfile(form);
      setMember(updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
    } finally {
      setSaving(false);
    }
  }

  return {
    member,
    loading,
    form,
    setForm,
    saving,
    isEditing,
    setIsEditing,
    handleSave,
  };
}
