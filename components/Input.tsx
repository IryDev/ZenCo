import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "password" | "email";
  onChangeText?: (text: string) => void;
  ref?: React.RefObject<TextInput | null>;
}

const Input = ({
  placeholder,
  value,
  label,
  onChangeText,
  type,
  ref,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <Text className="text-secondary font-eudoxus-bold mb-2">{label}</Text>
      <View className="relative">
        <TextInput
          className="bg-transparent focus:border-secondary text-secondary placeholder-[#757575] placeholder:font-eudoxus-bold border border-gray rounded-lg p-4 py-6"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === "password" && !isPasswordVisible}
          ref={ref}
        />

        {type === "password" && (
          <TouchableOpacity
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text className="text-secondary font-eudoxus-bold">
              {type === "password" ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
