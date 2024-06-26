import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Home, Settings, Register, Login } from "./Screens";
import { Ionicons } from "@expo/vector-icons";
import ThemeContext from "./theme/ThemeContext";
import { LightStyles, DarkStyles } from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState("light");
  const styles = theme === "light" ? LightStyles : DarkStyles;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const fetchTheme = async () => {
      const savedTheme = (await AsyncStorage.getItem("theme")) ?? "light";
      setTheme(savedTheme);
    };

    fetchTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    AsyncStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const sub = auth().onAuthStateChanged((member) => {
      if (member) {
        setUser(member);
      } else {
        setUser(null);
      }

      if (loading) setLoading(false);
    });

    return () => {
      sub();
    };
  }, []);

  if (loading) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user ? "Home" : "Login"}
          screenOptions={({ navigation, route }) => ({
            headerRight: () => (
              <Ionicons
                name={theme === "light" ? "sunny" : "moon"}
                onPress={toggleTheme}
                size={20}
                style={{ marginRight: 15 }}
                color={styles.iconcolor.color}
              />
            ),
            headerLeft: () => {
              const routeName = route.name;

              // If the route is Home, display the settings icon
              if (routeName === "Home") {
                return (
                  <Ionicons
                    name="settings-outline"
                    onPress={() => navigation.navigate("Settings")}
                    size={20}
                    style={{ marginRight: 15 }}
                    color={styles.iconcolor.color}
                  />
                );
              }

              return null;
            },
            headerStyle: {
              backgroundColor: styles.header.backgroundColor,
            },
            headerTitleStyle: {
              color: styles.headerTitle.color,
            },
            headerTitleAlign: "center",
            headerTintColor: styles.headerTitle.color,
          })}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </ThemeContext.Provider>
  );
}
