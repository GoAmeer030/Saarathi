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
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
