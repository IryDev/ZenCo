import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Link } from "expo-router";
import { Image, Platform, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const titleWords: { word: string; opacity: number }[] = [
  {
    word: "colocation",
    opacity: 0.2,
  },
  {
    word: "simplicité",
    opacity: 0.2,
  },
  {
    word: "ensemble",
    opacity: 0.2,
  },
  {
    word: "harmonie",
    opacity: 0.2,
  },
  {
    word: "partage",
    opacity: 0.1,
  },
  {
    word: "confiance",
    opacity: 0.05,
  },
  {
    word: "communauté",
    opacity: 0.05,
  },
  {
    word: "organisation",
    opacity: 0.05,
  },
  {
    word: "vivre",
    opacity: 0.05,
  },
  {
    word: "ensemble",
    opacity: 0.02,
  },
];

const Onboarding = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      className=" bg-primary h-full"
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
      <View>
        {titleWords.map((word, index) => {
          return (
            <View style={{ opacity: word.opacity }} key={index}>
              <Heading
                className={`uppercase font-eudoxus-extrabold ${
                  Platform.OS === "ios" ? "-mb-3" : "-mb-6"
                } text-[43px] color-black px-[5px]`}
                variant="h1"
              >
                {word.word}
              </Heading>
            </View>
          );
        })}
      </View>

      <View className="px-5">
        <Text className="text-secondary font-eudoxus-bold my-8 text-xl text-center">
          Découvrez la simplicité de gérer une colocation
        </Text>

        <Link href="/sign-up" asChild>
          <Button size="lg" title="S'inscrire" variant="secondary" />
        </Link>

        <Link href="/sign-in" asChild>
          <Button
            size="lg"
            outline
            className="mt-6"
            title="Se connecter"
            variant="secondary"
          />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
