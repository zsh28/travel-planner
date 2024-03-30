import { View, Text, Button, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import MadeButton from "../components/button";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";

const Home = () => {
const { theme } = useContext(ThemeContext);
const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();
  const handlerSettings = () => {
    nav.navigate("Settings" as never);
  };

  return (
    <View style={styles.container}>
      <Header headerTitle={"Home"} />
      <MadeButton
        onPress={handlerSettings}
        disabled={false}
        text={"Go to Settings"}
      />
    </View>
  );
};

export default Home;
