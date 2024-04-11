import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Header } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";

const Settings = () => {
  const nav = useNavigation();
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const changeEmail = () => {
  };

  const changePassword = () => {
  };

  return (
    <View style={styles.container}>
      <Header headerTitle={"Change Email"} />
      <TextInput style={styles.input} 
        placeholder="New Email" 
        keyboardType="email-address" 
        placeholderTextColor={styles.placeholder.color} 
        />
        <TextInput style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor={styles.placeholder.color} 
        />
        <Button
          onPress={changeEmail}
          disabled={false}
          variant={"green"}
          text={"Change Email"}
        />
        <View style={{ height: 20 }}></View>
      <Header headerTitle={"Change Password"} />
      <TextInput style={styles.input} 
        placeholder="Old Password" 
        secureTextEntry 
        placeholderTextColor={styles.placeholder.color} 
        />
      <TextInput style={styles.input}
        placeholder="New Password" 
        secureTextEntry 
        placeholderTextColor={styles.placeholder.color} 
        />
      <Button
        onPress={changePassword}
        disabled={false}
        variant={"green"}
        text={"Change Password"}
      />
      
    </View>
  );
};

export default Settings;
