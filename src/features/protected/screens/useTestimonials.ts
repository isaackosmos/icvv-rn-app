import { useState, useEffect, useRef } from "react";

import { testimonialsService, Testimonial } from "@/services/testimonial";
import { useAuthenticatedUser } from "@/context/AuthContext";

const CATEGORY = "Vitória";

export function useTestimonials() {
  const user = useAuthenticatedUser();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const successTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    async function fetch() {
      try {
        const data = await testimonialsService.getAll();
        setTestimonials(data);
      } catch {
        console.error("Erro ao buscar testemunhos");
      } finally {
        setLoading(false);
      }
    }
    fetch();

    return () => clearTimeout(successTimeout.current);
  }, []);

  async function handleAddTestimonial(data: Pick<Testimonial, "content">) {
    await testimonialsService.create({
      name: user.name ?? "Membro ICVV",
      content: data.content,
      category: CATEGORY,
    });
    setIsAdding(false);
    setShowSuccess(true);
    successTimeout.current = setTimeout(() => setShowSuccess(false), 5000);
  }

  async function handleLike(id: string) {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t)),
    );
    await testimonialsService.like(id);
  }

  async function handleAmen(id: string) {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, amens: t.amens + 1 } : t)),
    );
    await testimonialsService.amen(id);
  }

  return {
    testimonials,
    loading,
    isAdding,
    setIsAdding,
    showSuccess,
    handleAddTestimonial,
    handleLike,
    handleAmen,
  };
}
