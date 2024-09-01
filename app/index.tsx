import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { Text, View, SafeAreaView, Animated } from "react-native";
import { Stack } from "expo-router";
import { Button } from "tamagui";
import Toast from "react-native-toast-message";

const CustomToast = ({ text1, text2, ...rest }) => {
  return (
    <Animated.View>
      <View className="rounded-lg bg-white p-4 ">
        <Text>{text1}</Text>
        <Text>{text2}</Text>
      </View>
    </Animated.View>
  );
};

const toastConfig: any = {
  custom_success: (props) => <CustomToast {...props} />,
};

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-red-400 h-full">
        <Text>Hello World</Text>
        <Button
          className="font-semibold"
          onPress={() => {
            Toast.show({
              type: "custom_success",
              text1: "Hello",
              text2: "This is some something 👋",
            });
          }}
        >
          Plain
        </Button>
      </View>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}
