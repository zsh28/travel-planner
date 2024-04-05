import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde8",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#c7c9eb",
    height: 50,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  iconcolor: {
    color: "black",
  },
  input: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    width: 300,
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  redbutton: {
    marginTop: 20,
    width: 300,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  placeholder: {
    color: "#000",
  },
  // Add Flight Icon
  addflightIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  addflightcolorIcon: {
    color: "blue",
  },
  // Modal Styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#CDD1FF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black" 
  },
});

export default styles;
