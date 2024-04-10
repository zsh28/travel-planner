
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
  style?: StyleProp<ViewStyle>;
}

const RedButton = (props: Props) => {
  const { onPress, text, disabled, style } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.redbutton]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RedButton;
