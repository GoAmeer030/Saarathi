import React from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>Not Found!</Text>
      </View>
    </>
  );
}
