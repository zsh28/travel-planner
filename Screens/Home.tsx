import { View, Text, Button, TouchableOpacity, Modal, TextInput } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RedButton, Header, GreenButton } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();

  //state to check if modal is visible
  const [isModalVisible, setModalVisible] = useState(false);

  //set modal to visible -> True
  const openModal =() => setModalVisible(true);
  //set modal to visible -> False
  const closeModal =() => setModalVisible(false);

  return <View style={styles.container}>
    <Ionicons
        name="add-circle-outline"
        size={40}
        color={styles.addflightcolorIcon.color}
        style={styles.addflightIcon}
        onPress={() => {
          openModal();
        }}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Flight Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Flight Number"
              placeholderTextColor={styles.placeholder.color}
            />
            <GreenButton
              onPress={closeModal}
              disabled={false}
              text={"Submit"}
            />
          </View>
        </View>
      </Modal>
  </View>;
};

export default Home;
