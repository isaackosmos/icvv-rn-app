import { useState, useEffect } from "react";

import { Child, kidsService, Room } from "@/services/kids";

export function useKids() {
  const [children, setChildren] = useState<Child[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const [childrenData, roomsData] = await Promise.all([
        kidsService.getChildren(),
        kidsService.getRooms(),
      ]);
      setChildren(childrenData);
      setRooms(roomsData);
      if (roomsData.length > 0) setSelectedRoom(roomsData[0].name);
    } catch {
      console.error("Erro ao buscar dados");
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckin(childId: string) {
    if (!selectedRoom) return;
    await kidsService.checkin(childId, selectedRoom);
    fetchData();
  }

  async function handleCheckout(childId: string) {
    await kidsService.checkout(childId);
    fetchData();
  }

  async function handleDelete(childId: string) {
    await kidsService.deleteChild(childId);
    fetchData();
  }

  async function handleAddChild(data: Omit<Child, "id" | "status">) {
    await kidsService.addChild(data);
    fetchData();
  }

  return {
    children,
    rooms,
    selectedRoom,
    setSelectedRoom,
    loading,
    handleCheckin,
    handleCheckout,
    handleDelete,
    handleAddChild,
  };
}
