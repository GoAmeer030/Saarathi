import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { cssInterop } from "nativewind";
import "../styles/global.css";

export default function RootLayout() {
  cssInterop(SafeAreaView, { className: "style" });

  return (
    <GluestackUIProvider mode="dark">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
