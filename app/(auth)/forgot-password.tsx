import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { useSignIn } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ForgotPassword = () => {
  const insets = useSafeAreaInsets();

  const { isLoaded, signIn } = useSignIn();

  const onResetPasswordPress = async () => {
    if (!email) {
      emailInputRef.current?.focus();
      return;
    }

    if (!isLoaded) return;

    await signIn?.create({
      strategy: "reset_password_email_code",
      identifier: email,
    });
  };

  const [email, setEmail] = useState("");

  const emailInputRef = useRef<TextInput>(null);

  return (
    <SafeAreaView
      className="bg-primary h-full"
      style={{
        paddingTop: Platform.OS === "android" ? insets.top : 0,
        paddingBottom: Platform.OS === "android" ? insets.bottom : 0,
      }}
    >
      <Image
        source={require("../../assets/images/image.png")}
        className="absolute top-0 left-0 right-0"
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
      />

      <View className="px-5 mb-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center gap-2 mb-5"
        >
          <Image
            source={require("../../assets/images/arrow-left.png")}
            className="size-6"
          />
        </TouchableOpacity>

        <Heading
          variant="h2"
          className="mb-2 font-eudoxus-bold"
          color="secondary"
        >
          Mot de passe oublié ?
        </Heading>

        <Text className="text-grayLight text-md font-eudoxus-bold">
          Entrez votre email pour réinitialiser votre mot de passe
        </Text>
      </View>

      <View className="px-5 flex flex-col gap-6 flex-1">
        <Input
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          ref={emailInputRef}
          type="text"
        />

        <Button
          onPress={onResetPasswordPress}
          size="lg"
          title="Continuer"
          variant="secondary"
        />

        <View className="flex-row justify-between items-center mt-5">
          <View className="h-[1px] flex-1 bg-[#ACACAC]" />
          <Text className="text-grayLight px-4 flex-2 text-md font-eudoxus-bold">
            Se connecter avec
          </Text>
          <View className="h-[1px]  flex-1 bg-[#ACACAC] " />
        </View>

        <View className="px-14 flex flex-row gap-4  justify-center">
          {Platform.OS === "ios" && (
            <TouchableOpacity className="bg-white size-14 rounded-full p-4">
              <Image
                source={require("../../assets/images/apple.png")}
                className="size-full"
              />
            </TouchableOpacity>
          )}

          {Platform.OS === "android" && (
            <TouchableOpacity className="bg-white size-14 rounded-full p-4">
              <Image
                source={require("../../assets/images/apple.png")}
                className="size-full"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity className="bg-white size-14 rounded-full p-4">
            <Image
              source={require("../../assets/images/facebook.png")}
              className="size-full"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
