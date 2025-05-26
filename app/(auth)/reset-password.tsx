import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Link, router } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ResetPassword = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      className="bg-primary h-full"
      style={{ paddingTop: Platform.OS === "android" ? insets.top : 0 }}
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
          Réinitialiser le mot de passe
        </Heading>

        <Text className="text-grayLight text-md font-eudoxus-bold">
          Créez un nouveau mot de passe pour votre compte
        </Text>
      </View>

      <View className="px-5 flex flex-col gap-6 flex-1">
        <Input
          label="Nouveau mot de passe"
          placeholder="Nouveau mot de passe"
          value=""
          type="password"
        />

        <Input
          label="Confirmer le mot de passe"
          placeholder="Confirmer le mot de passe"
          value=""
          type="password"
        />
      </View>

      <View className="px-5">
        <Button size="lg" title="Changer le mot de passe" variant="secondary" />
      </View>

      <Text className="text-gray text-center font-eudoxus-bold mt-10 px-5">
        Vous vous souvenez de votre mot de passe ?
      </Text>
      <Link href="/sign-in" asChild>
        <Text className="text-secondary text-md font-eudoxus-bold underline text-center">
          Se connecter
        </Text>
      </Link>
    </SafeAreaView>
  );
};

export default ResetPassword;
