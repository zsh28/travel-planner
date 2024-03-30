import {
  Button as RNButton,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "../Styles/LightStyles";

interface Props {
  onPress: () => void;
  text?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const MadeButton = (props: Props) => {
  const { onPress, text, disabled, style } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.madeButton]}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default MadeButton;
