import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { TamaguiProvider, View, createTamagui } from "tamagui";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import defaultConfig from "@tamagui/config/v3";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity, Text } from "react-native";
import { tamaguiConfig } from "../tamagui.config";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(modals)/login"
            options={{
              title: "Login or sign up",
              presentation: "modal",
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Text>Back</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modals)/booking"
            options={{ headerTitle: "", presentation: "transparentModal" }}
          />
          <Stack.Screen name="listing/[id]" options={{ headerTitle: "" }} />
        </Stack>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
