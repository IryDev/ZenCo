import { cn } from "@/lib/utils";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  outline?: boolean;
  loading?: boolean;
}

const Button = ({
  title,
  onPress,
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  outline = false,
  loading = false,
}: ButtonProps) => {
  const baseStyles = "rounded-lg items-center justify-center";

  const variantStyles = {
    primary: outline
      ? "border-2 border-primary active:bg-primary/10"
      : "bg-primary active:bg-primary/90",
    secondary: outline
      ? "border-2 border-secondary active:bg-secondary/10"
      : "bg-secondary active:bg-secondary/90",
    tertiary: outline
      ? "border-2 border-tertiary active:bg-tertiary/10"
      : "bg-tertiary active:bg-tertiary/90",
  };

  const sizeStyles = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorStyles = {
    primary: outline ? "text-primary" : "text-white",
    secondary: outline ? "text-secondary" : "text-primary",
    tertiary: outline ? "text-tertiary" : "text-white",
  };

  return (
    <TouchableOpacity
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        disabled && "opacity-50",
        className
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        className={cn(
          "font-medium font-eudoxus-bold",
          textColorStyles[variant],
          textSizeStyles[size],
          disabled && "opacity-70"
        )}
      >
        {loading ? <ActivityIndicator size="small" color="#0D0F00" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
