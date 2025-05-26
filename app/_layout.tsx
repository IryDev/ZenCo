import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import "../globals.css";
import { tokenCache } from '@clerk/clerk-expo/token-cache'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "EudoxusSans-Regular": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-Regular.ttf"),
    "EudoxusSans-Medium": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-Medium.ttf"),
    "EudoxusSans-ExtraLight": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-ExtraLight.ttf"),
    "EudoxusSans-Light": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-Light.ttf"),
    "EudoxusSans-ExtraBold": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-ExtraBold.ttf"),
    "EudoxusSans-Bold": require("../assets/fonts/Eudoxus-Sans-font/EudoxusSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <View
        className="bg-primary"
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}
      >
        {isSplashVisible && <AnimatedSplashScreen />}
        <StatusBar style="light" backgroundColor="transparent" />
        <Stack>
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </ClerkProvider>
  );
}
