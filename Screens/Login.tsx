import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { RedButton, Header, GreenButton } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();
  const handlerRegister = () => {
    nav.navigate("Register" as never);
  };
  //function to login
  const loginFunction = () => {
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
          onPress={loginFunction}
          disabled={false}
          text={"Login"}
        />
        <RedButton
          onPress={handlerRegister}
          text={"Register here"}
          disabled={false}
        />
        
    </View>
  );
};  

export default Login;