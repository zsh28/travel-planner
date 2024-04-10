import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();

  //state to check if modal is visible
  const [isModalVisible, setModalVisible] = useState(false);

  const ToggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return <View style={styles.container}>
    <Ionicons
        name="add-circle-outline"
        size={40}
        color={styles.addflightcolorIcon.color}
        style={styles.addflightIcon}
        onPress={ToggleModal}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={ToggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Flight Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Flight Number"
              placeholderTextColor={styles.placeholder.color}
            />
            <Button
              onPress={ToggleModal}
              disabled={false}
              variant={"green"}
              text={"Submit"}
            />
          </View>
        </View>
      </Modal>
  </View>;
};

export default Home;
