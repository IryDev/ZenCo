import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      {/* <StatusBar style="light" backgroundColor="transparent" /> */}

      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "black", // ou "#000000"
          },
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "black", // ou "#000000"
          },
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "black", // ou "#000000"
          },

          animationDuration: 1000,
        }}
      />

      <Stack.Screen
        name="forgot-password"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="reset-password"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
