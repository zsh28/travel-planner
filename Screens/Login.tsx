import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import auth from "@react-native-firebase/auth";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const nav = useNavigation();

  const handlerRegister = () => {
    nav.navigate("Register" as never);
  };

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const loginFunction = () => {
    if (!loginForm.email || !loginForm.password || loginForm.email === "" || loginForm.password === "") {
      Alert.alert("Please enter all fields.");
      return;
    };

    auth()
      .signInWithEmailAndPassword(loginForm.email, loginForm.password)
      .then(() => {
        nav.navigate("Home" as never);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setLoginForm((f) => ({ ...f, email: text }))}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        onChangeText={(text) => setLoginForm((f) => ({ ...f, password: text }))}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={styles.placeholder.color}
      />
      <Button
        onPress={loginFunction}
        text={"Login"}
        variant={"green"}
        disabled={false}
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
