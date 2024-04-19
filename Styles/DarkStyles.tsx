import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090b38",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "#04052e",
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
    height: 50,
    width: "100%",
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
    color: "#a9a9a9",
  },
  // Add Flight Icon
  addflightIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  //close icon
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeIconColor: {
    color: "red",
  },
  addflightcolorIcon: {
    color: "red",
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
    backgroundColor: "#272D71",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
});

export default styles;
