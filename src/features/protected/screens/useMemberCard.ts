import { useState } from "react";

import { useAuthenticatedUser } from "@/context/AuthContext";

export function useMemberCard() {
  const [flipped, setFlipped] = useState(false);
  const user = useAuthenticatedUser();

  return {
    flipped,
    flip: () => setFlipped((prev) => !prev),
    user,
  };
}
