import React from "react";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <MapView
        loadingEnabled
        provider={PROVIDER_GOOGLE}
        className="h-screen w-full"
      />
    </SafeAreaView>
  );
}
