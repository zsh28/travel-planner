import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDDE8",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#B0B0B9",
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
    backgroundColor: "#DCDDE8",
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    width: "85%",
    paddingHorizontal: 10,
    color: "#000",
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
    color: "#000",
  },
  addflightcolorIcon: {
    color: "#000",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#B0B0B9",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
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
    color: "black",
  },
  text: {
    color: "#000",
    textAlign: "center",
  },
  separator: {
    color: "#000",
  },
  primary: {
    color: "#18385D" 
   },
   secondary: {
     color: "#1B7416"
   }
});

export default styles;
