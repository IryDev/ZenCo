import React, { useEffect, useState } from "react";
import { Animated, Image, View } from "react-native";

const AnimatedSplashScreen = () => {
  const [loading, setLoading] = useState(0);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading >= 100) {
          clearInterval(interval);
          // Start fade out animation when loading is complete
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
          return 100;
        }
        return prevLoading + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [loading, fadeAnim]);

  return (
    <View
      className="flex-1 items-center justify-center absolute z-50 inset-0"
      style={{}}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
        className="absolute size-full bg-primary"
      >
        <Image
          className="size-full"
          source={require("../assets/images/splash-background.png")}
        />
      </Animated.View>

      <Animated.View
        className="absolute"
        style={{
          opacity: fadeAnim,
        }}
      >
        <Image
          className="size-36"
          source={require("../assets/images/logo.png")}
        />
      </Animated.View>

      {/* Loading bar */}
      <Animated.View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          opacity: fadeAnim,
        }}
        className="absolute w-[114px] h-2 bottom-32 bg-[#E5E4E4] rounded-full overflow-hidden"
      >
        <View
          className="h-full rounded-full bg-secondary"
          style={{
            width: `${loading}%`,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default AnimatedSplashScreen;
