import {
  Button as RNButton,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { LightStyles } from "../Styles";

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
      style={[LightStyles.madeButton]}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default MadeButton;
