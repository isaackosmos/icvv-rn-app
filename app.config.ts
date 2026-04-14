import "dotenv/config";

export default {
  expo: {
    name: "ICVV",
    slug: "icvv",
    scheme: "icvv",
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      whatsappNumber: process.env.EXPO_PUBLIC_WHATSAPP_NUMBER,
      whatsappEmail: process.env.EXPO_PUBLIC_WHATSAPP_EMAIL,
      address: process.env.EXPO_PUBLIC_ADDRESS,
      mapsUrl: process.env.EXPO_PUBLIC_MAPS_URL,
      fallbackAvatar: process.env.EXPO_PUBLIC_FALLBACK_AVATAR,
    },
  },
};
