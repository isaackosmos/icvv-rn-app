import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra ?? {};

export const env = {
  apiUrl: extra.apiUrl ?? "",
  whatsappNumber: extra.whatsappNumber ?? "",
  whatsappEmail: extra.whatsappEmail ?? "",
  address: extra.address ?? "",
  mapsUrl: extra.mapsUrl ?? "",
  fallbackAvatar: extra.fallbackAvatar ?? "",
};
