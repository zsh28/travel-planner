import { View, Text } from "react-native";
import React from "react";
import styles from "../Styles/LightStyles";
import { HeaderProp } from "../Types/typeconfig";

const Header = ({ headerTitle }: HeaderProp) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
