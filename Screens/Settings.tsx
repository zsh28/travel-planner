import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import MadeButton from "../components/button";
import Header from "../components/header";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";


//needs style on #18

const Settings = () => {
  const nav = useNavigation();
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const handlerHome = () => {
    nav.navigate("Home" as never);
  };

  return (
    <View style={styles.container}>
      <Header headerTitle={"Settings"} />
      <MadeButton onPress={handlerHome} disabled={false} text={"Go to Home"} />
    </View>
  );
};

export default Settings;
