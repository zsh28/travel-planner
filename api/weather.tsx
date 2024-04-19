import axios from "axios";
const getWeatherData = async (location: String) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: location },
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    console.log("Weather Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in API Call:", error);
    throw new Error("Failed to fetch data");
  }
};

export default getWeatherData;
