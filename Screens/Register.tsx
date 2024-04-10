import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { RedButton, Header, GreenButton } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";

const Register = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();
  const handlerLogin = () => {
    nav.navigate("Login" as never);
  };
  //function to register
  const registerFunction = () => {
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        placeholderTextColor={styles.placeholder.color} 
        />
        <TextInput style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor={styles.placeholder.color} 
        />
        <GreenButton
          onPress={registerFunction}
          disabled={false}
          text={"Register"}
        />
        <RedButton
          onPress={handlerLogin}
          text={"Have an account? Login here"}
          disabled={false}
        />
    </View>
  );
};  

export default Register;