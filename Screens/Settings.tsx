import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MadeButton from "../components/button";
import Header from "../components/header";
import styles from "../Styles/styleconfig";

//needs style on #18

const Settings = () => {
  const nav = useNavigation();

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
