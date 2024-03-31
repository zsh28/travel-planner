import { View, Text } from "react-native";
import React from "react";
import { LightStyles } from "../Styles";
import { HeaderProp } from "../Types/typeconfig";

const Header = ({ headerTitle }: HeaderProp) => {
  return (
    <View style={styles.header}>
      <Text style={LightStyles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
