import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18385D",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#132C4A",
    height: 50,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  iconcolor: {
    color: "white",
  },
  input: {
    backgroundColor: "#18385D",
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    width: "85%",
    paddingHorizontal: 10,
    color: "#fff",
  },
  button: {
    marginTop: 20,
    width: 300,
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
    color: "gray",
  },
  addflightIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeIconColor: {
    color: "#fff",
  },
  addflightcolorIcon: {
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#132C4A",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
  },
  separator: {
    color: "#FFF",
  },
  primary: {
   color: "#102741" 
  },
  secondary: {
    color: "#155c11"
  }
});

export default styles;
