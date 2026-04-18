import React from "react";

import { PrayerForm } from "@/components/PrayerForm";
import { PrayerSuccess } from "@/components/PrayerSuccess";

import { usePrayer } from "@/features/protected/home/usePrayer";

export default function PrayerScreen() {
  const {
    name,
    setName,
    request,
    setRequest,
    anonymous,
    setAnonymous,
    loading,
    submitted,
    error,
    handleSubmit,
    reset,
  } = usePrayer();

  if (submitted) return <PrayerSuccess onReset={reset} />;

  return (
    <PrayerForm
      name={name}
      request={request}
      anonymous={anonymous}
      loading={loading}
      error={error}
      onNameChange={setName}
      onRequestChange={setRequest}
      onToggleAnonymous={() => setAnonymous(!anonymous)}
      onSubmit={handleSubmit}
    />
  );
}
