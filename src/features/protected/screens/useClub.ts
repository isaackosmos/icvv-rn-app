import { useState, useEffect, useMemo } from "react";

import { clubService, Coupon } from "@/services/club";
import { useAuthenticatedUser } from "@/context/AuthContext";

interface Voucher {
  coupon: Coupon;
  code: string;
}

export function useClub() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [voucher, setVoucher] = useState<Voucher | null>(null);
  const user = useAuthenticatedUser();

  useEffect(() => {
    async function fetch() {
      try {
        const data = await clubService.getAll();
        setCoupons(data);
      } catch {
        console.error("Erro ao buscar cupons");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const filteredCoupons = useMemo(
    () =>
      coupons.filter(
        (c) =>
          c.companyName.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase()),
      ),
    [coupons, search],
  );

  function selectCoupon(coupon: Coupon) {
    setSelectedCoupon(coupon);
  }

  function closeDetail() {
    setSelectedCoupon(null);
  }

  function generateVoucher() {
    if (!selectedCoupon) return;
    const code = `ICVV-${selectedCoupon.id}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setVoucher({ coupon: selectedCoupon, code });
  }

  function closeVoucher() {
    setVoucher(null);
    setSelectedCoupon(null);
  }

  return {
    coupons: filteredCoupons,
    loading,
    search,
    setSearch,
    selectedCoupon,
    selectCoupon,
    closeDetail,
    voucher,
    generateVoucher,
    closeVoucher,
    user,
  };
}
