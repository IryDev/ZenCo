import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SignIn = () => {
  const insets = useSafeAreaInsets();
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const onSignInPress = async () => {
    if (!email || !password) {
      if (!email) {
        emailInputRef.current?.focus();
        return;
      }

      if (!password) {
        passwordInputRef.current?.focus();
        return;
      }
    }

    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView
      className=" bg-primary h-full"
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
          Se connecter
        </Heading>

        <Text className="text-grayLight text-md font-eudoxus-bold">
          Connectez-vous pour utiliser l’application
        </Text>
      </View>

      <View className="px-5 flex flex-col gap-6 flex-1">
        <Input
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          type="text"
          ref={emailInputRef}
        />

        <View>
          <Input
            label="Mot de passe"
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            type="password"
            ref={passwordInputRef}
          />

          <Link href="/forgot-password" asChild>
            <Text className="text-secondary text-right mt-1 text-md font-eudoxus-bold underline">
              Mot de passe oublié ?
            </Text>
          </Link>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-10">
        <View className="h-[1px] flex-1 bg-[#ACACAC]" />
        <Text className="text-grayLight px-4 flex-2 text-md font-eudoxus-bold">
          Se connecter avec
        </Text>
        <View className="h-[1px]  flex-1 bg-[#ACACAC] " />
      </View>

      <View className="py-10 px-14 flex flex-row gap-4  justify-center">
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

      <View className="px-5">
        <Button
          size="lg"
          title="Se connecter"
          variant="secondary"
          onPress={onSignInPress}
          loading={!isLoaded}
        />
      </View>

      <Text className="text-gray text-center font-eudoxus-bold mt-5">
        Vous n&apos;avez pas de compte chez nous ?{" "}
        <Link href="/sign-up" asChild>
          <Text className="text-secondary text-md font-eudoxus-bold underline">
            S&apos;inscrire
          </Text>
        </Link>
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
