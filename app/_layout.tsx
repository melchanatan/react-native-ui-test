import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { TamaguiProvider, View, createTamagui } from "tamagui";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { toast, Toasts } from "@backpackapp-io/react-native-toast";

import defaultConfig from "@tamagui/config/v3";

import { useColorScheme } from "@/hooks/useColorScheme";

const config = createTamagui(defaultConfig);

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

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView>
          <Stack />
          <Toasts />
        </GestureHandlerRootView>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
