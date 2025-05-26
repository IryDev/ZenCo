import { cn } from "@/lib/utils";
import { Text } from "react-native";

interface HeadingProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4";
  color?: "primary" | "secondary" | "tertiary" | "default";
  className?: string;
  align?: "left" | "center" | "right";
}

const Heading = ({
  children,
  variant = "h1",
  color = "default",
  className,
  align = "left",
}: HeadingProps) => {
  const sizeStyles = {
    h1: "text-[44px] ",
    h2: "text-[24px]",
    h3: "text-[20px]",
    h4: "text-[16px]",
  };

  const colorStyles = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    default: "text-gray-900 dark:text-white",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Text
      className={cn(
        sizeStyles[variant],
        colorStyles[color],
        alignStyles[align],
        className
      )}
    >
      {children}
    </Text>
  );
};

export default Heading;
