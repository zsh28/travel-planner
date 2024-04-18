import axios from "axios";
/*
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: 'London'},
  headers: {
    'X-RapidAPI-Key': '5bda5892bfmsh0930416066adb65p16c0bcjsnf58b3e7581bf',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
*/
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
