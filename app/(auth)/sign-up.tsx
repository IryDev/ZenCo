import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { useSignUp } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SignUp = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();

  const emailInputRef = useRef<TextInput>(null);

  const onNextPress = async () => {
    if (!isLoaded) return;

    if (!email) {
      emailInputRef.current?.focus();
      return;
    }

    await signUp.create({
      emailAddress: email,
    });
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
          Quelle est votre adresse e-mail ?
        </Heading>

        <Text className="text-grayLight text-lg font-eudoxus-bold">
          Entrez l&apos;adresse e-mail où vous joindre.
        </Text>

        <Text className="text-grayLight text-lg font-eudoxus-bold">
          Personne ne la verra sur votre profil.
        </Text>
      </View>

      <ScrollView>
        <View className="px-5 flex flex-col gap-6">
          <Input
            label="Adresse e-mail"
            placeholder="Adresse e-mail"
            value={email}
            onChangeText={setEmail}
            ref={emailInputRef}
            type="text"
          />
        </View>

        <View className="px-5 mt-10">
          <Button
            size="lg"
            title="Suivant"
            loading={!isLoaded}
            variant="secondary"
            onPress={onNextPress}
          />
        </View>

        <View className="px-5 mt-5">
          <Button
            size="lg"
            title="S'inscrire avec un numéro de mobile"
            variant="secondary"
            outline
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
