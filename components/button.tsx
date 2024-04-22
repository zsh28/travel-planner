import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { LightStyles, DarkStyles } from "../Styles";
import { useContext } from "react";
import ThemeContext from "../theme/ThemeContext";

interface Props {
  onPress: () => void;
  text?: string;
  disabled?: boolean;
  variant: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}

const Button = (props: Props) => {
  const { onPress, text, disabled, style, variant } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const buttonStyle = {
    primary: styles.primary.color,
    secondary: styles.secondary.color,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: buttonStyle[variant],
        },
        style,
      ]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
