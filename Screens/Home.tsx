import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styleconfig";
import Header from "../components/header";
import MadeButton from "../components/button";

const Home = () => {
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
