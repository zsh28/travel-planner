import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();
  const handlerRegister = () => {
    nav.navigate("Register" as never);
  };
  
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
        <Button
          onPress={loginFunction}
          disabled={false}
          variant={"green"}
          text={"Login"}
        />
        <Button
          onPress={handlerRegister}
          text={"Register here"}
          variant={"red"}
          disabled={false}
        />
        
    </View>
  );
};  

export default Login;