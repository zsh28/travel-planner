import {
  Button as RNButton,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
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
    primary: theme === "light" ? "#18385D" : "#102741",
    secondary: theme === "light" ? "#1B7416" : "#155c11",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: buttonStyle[variant],
        },
      ]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
