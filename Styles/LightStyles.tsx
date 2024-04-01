import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde8",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    backgroundColor: "#c7c9eb",
    height: 50,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },

  //buttonstyle
  madeButton: {
    height: 20,
    width: 100,
    backgroundColor: "#f27900",
    borderRadius: 10,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0, 
      height: 4,
    },
    shadowOpacity: 0.5, 
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconcolor: {
    color: "black",
  }
});

export default styles;
