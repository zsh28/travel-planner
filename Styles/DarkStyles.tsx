import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090b38",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    backgroundColor: "#04052e",
    height: 50,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },

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
    color: "white",
  }
  
});

export default styles;
