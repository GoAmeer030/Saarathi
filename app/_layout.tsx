import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { cssInterop } from "nativewind";
import "../styles/global.css";
import MapView from "react-native-maps";

const RootLayout = () => {
  cssInterop(SafeAreaView, { className: "style" });
  cssInterop(MapView, { className: "style" });

  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
};

export default RootLayout;
