import "react-native-gesture-handler";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { Button } from "../components";
import ThemeContext from "../theme/ThemeContext";
import { LightStyles, DarkStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getFlightData, getWeatherData } from "../api";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

interface Flight {
  id: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureDateTime: Date;
  arrivalDateTime: Date;
  arrivalAirport: string;
  weather: number;
  date: string;
}

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === "light" ? LightStyles : DarkStyles;

  const [isModalVisible, setModalVisible] = useState(false);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [flightForm, setFlightForm] = useState({
    flightNumber: "",
    departure: "",
    arrival: "",
  });

  const user = auth().currentUser;
  const userId = user?.uid;

  useEffect(() => {
    if (user) {
      const userFlightsRef = database().ref(`/flights/${user.uid}`);

      userFlightsRef.on("value", (snapshot) => {
        const flightsData = snapshot.val();

        if (flightsData) {
          const parsedFlights = Object.keys(flightsData).map((key) => ({
            id: key,
            ...flightsData[key],
          }));

          setFlights(parsedFlights);
        } else {
          setFlights([]);
        }
      });

      return () => userFlightsRef.off();
    }
  }, []);

  const TogglePicker = () => {
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
      // This has more than 4 values being passed to it, generally when you have more than 3, you should likely use them as an object to benefit from readability and autocomplete
      const flightData = await getFlightData(
        flightForm.departure,
        flightForm.arrival,
        date,
        flightForm.flightNumber
      );

      // Get the data from getFlightData function using indexed access
      const arrivalAirport =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSArrivalName"];
      const departureDateTime =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSDepartureDateTime"];
      const arrivalDateTime =
        flightData.OTA_AirDetailsRS.FlightDetails["@FLSArrivalDateTime"];

      const weatherData = await getWeatherData(arrivalAirport);
      const weather = weatherData.current.temp_c;

      // Add flight data to the database
      const userFlightsRef = database().ref(`/flights/${userId}`).push();

      userFlightsRef.set({
        flightNumber: flightForm.flightNumber,
        departure: flightForm.departure,
        arrival: flightForm.arrival,
        departureDateTime,
        arrivalDateTime,
        arrivalAirport,
        weather,
        date,
      });

      alert("Flight details saved successfully.");
    } catch (error: any) {
      alert(
        "Failed to fetch flight data. Please check the details and try again."
      );
      console.error(error.message);
    }

    ToggleModal();
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              padding: 10,
              borderBottomWidth: 1,
              borderColor: styles.separator.color,
            }}
          >
            <Text style={styles.text}>Flight Number: {item.flightNumber}</Text>
            <Text style={styles.text}>Departure: {item.departure}</Text>
            <Text style={styles.text}>Arrival: {item.arrival}</Text>
            <Text style={styles.text}>Departure Date: {item.date}</Text>
            <Text style={styles.text}>Weather: {item.weather}°C</Text>
          </View>
        )}
      />

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
              style={[styles.input, { minWidth: "100%", marginBottom: 5 }]}
              placeholder="Flight Number e.g. BA1234"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("flightNumber", text)}
              value={flightForm.flightNumber}
            />
            <TextInput
              style={[styles.input, { minWidth: "100%", marginBottom: 5 }]}
              placeholder="Departure e.g. LHR"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("departure", text)}
              value={flightForm.departure}
            />
            <TextInput
              style={[styles.input, { minWidth: "100%", marginBottom: 5 }]}
              placeholder="Arrival e.g. JFK"
              placeholderTextColor={styles.placeholder.color}
              onChangeText={(text) => handleInputChange("arrival", text)}
              value={flightForm.arrival}
            />
            <TouchableOpacity onPress={TogglePicker}>
              <TextInput
                style={[styles.input, { minWidth: "100%", marginBottom: 5 }]}
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
              onRequestClose={TogglePicker}
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
            <Button onPress={handleSubmit} variant="primary" text="Submit" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
