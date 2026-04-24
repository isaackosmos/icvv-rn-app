import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

export function useMemberCard() {
  const [flipped, setFlipped] = useState(false);
  const { user } = useAuth();

  return {
    flipped,
    flip: () => setFlipped((prev) => !prev),
    user,
  };
}
