import { View, TextInput, Alert } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import auth from "@react-native-firebase/auth";

const Register = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();

  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    password: "",
  });

  const handlerLogin = () => {
    nav.navigate("Login" as never);
  };

  const registerFunction = () => {
    if (
      !registrationForm.email ||
      !registrationForm.password ||
      registrationForm.email === "" ||
      registrationForm.password === ""
    ) {
      Alert.alert("Please enter all fields.");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(
        registrationForm.email,
        registrationForm.password
      )
      .then(() => {
        Alert.alert("Registration Successful", "You may Log In now");
        handlerLogin();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) =>
          setRegistrationForm((f) => ({ ...f, email: text }))
        }
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        onChangeText={(text) =>
          setRegistrationForm((f) => ({ ...f, password: text }))
        }
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={styles.placeholder.color}
      />
      <Button
        onPress={registerFunction}
        disabled={false}
        variant="primary"
        text="Register"
      />
      <Button
        onPress={handlerLogin}
        text="Have an account? Login here"
        variant="secondary"
      />
    </View>
  );
};

export default Register;
