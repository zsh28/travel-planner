import { View, Text } from "react-native";
import React from "react";
import { LightStyles, DarkStyles } from "../Styles";
import { HeaderProp } from "../Types/typeconfig";
import { useContext } from "react";
import ThemeContext from "../theme/ThemeContext";


const Header = ({ headerTitle }: HeaderProp) => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  return (
    <View style={styles.header}>
      <Text style={LightStyles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
