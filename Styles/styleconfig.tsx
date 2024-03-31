import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const fontSizeBase = Math.min(screenWidth, screenHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  //header
  header: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: screenHeight * 0.1,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: fontSizeBase * 0.075,
  },

  //buttonstyle
  madeButton: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.3,
    backgroundColor: "#9BC995",
  },
  buttonText: {
    color: "#fff",
    fontSize: fontSizeBase * 0.05,
    fontWeight: "bold",
  },
});

export default styles;
