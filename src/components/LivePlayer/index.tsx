import React from "react";

import { View } from "react-native";
import { WebView } from "react-native-webview";

import styles from "./styles";

import { env } from "@/constants/env";

export function LivePlayer() {
  const html = `
    <html>
      <body style="margin:0;background:#000;">
        <video
          src="${env.streamUrl}"
          controls
          autoplay
          muted
          playsinline
          style="width:100%;height:100%;object-fit:contain;"
        />
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html }}
        style={styles.webview}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}
