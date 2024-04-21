import { View } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import auth from "@react-native-firebase/auth";

const Settings = () => {
  const nav = useNavigation();
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        nav.navigate("Login" as never)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={logout}
        disabled={false}
        variant={"green"}
        text={"Sign Out"}
      />
    </View>
  );
};

export default Settings;
