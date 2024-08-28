import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-red-400">
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
