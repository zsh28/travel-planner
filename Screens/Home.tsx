import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getFlightData } from "../api";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const nav = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [date, setDate] = useState("");
  const [flightForm, setFlightForm] = useState({
    flightNumber: "",
    departure: "",
    arrival: "",
  });

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  const ToggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setDate("");
      setFlightForm({ flightNumber: "", departure: "", arrival: "" });
      setPickerVisible(false);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFlightForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !flightForm.flightNumber ||
      !flightForm.departure ||
      !flightForm.arrival ||
      !date
    ) {
      alert("All fields must be filled out");
      return;
    }

    try {
      const flightData = await getFlightData(
        flightForm.departure,
        flightForm.arrival,
        date,
        flightForm.flightNumber
      );
      console.log("Flight Data Received:", flightData);
      const arrivalAirport =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSArrivalName"]; // eg Barcelona
      const departureDateTime =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSDepartureDateTime"]; //eg 2024-04-14T06:10:00
      const arrivalDateTime =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSArrivalDateTime"]; //eg 2024-04-14T08:10:00
      alert("Flight details saved successfully.");
    } catch (error) {
      alert(
        "Failed to fetch flight data. Please check the details and try again."
      );
      console.error(error);
    }

    ToggleModal();
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.modalText}>Fill out the Form</Text>
            <Ionicons
              name="close-circle-outline"
              size={30}
              color={styles.closeIconColor.color}
              style={styles.closeIcon}
              onPress={ToggleModal}
            />
            <TextInput
              style={styles.input}
              placeholder="Flight Number e.g. BA1234"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("flightNumber", text)}
              value={flightForm.flightNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Departure e.g. LHR"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("departure", text)}
              value={flightForm.departure}
            />
            <TextInput
              style={styles.input}
              placeholder="Arrival e.g. JFK"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("arrival", text)}
              value={flightForm.arrival}
            />
            <TouchableOpacity onPress={togglePicker}>
              <TextInput
                style={styles.input}
                placeholder="Select Date of Departure"
                placeholderTextColor={styles.placeholder.color}
                value={date}
                editable={false}
              />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isPickerVisible}
              onRequestClose={togglePicker}
            >
              {isPickerVisible && (
                <DatePicker
                  current={date || new Date().toISOString().split("T")[0]}
                  mode="calendar"
                  onSelectedChange={(selectedDate) => {
                    setDate(selectedDate);
                    setPickerVisible(false);
                  }}
                  style={{ borderRadius: 10, width: "100%" }}
                />
              )}
            </Modal>
            <Button
              onPress={handleSubmit}
              disabled={false}
              variant={"green"}
              text={"Submit"}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
