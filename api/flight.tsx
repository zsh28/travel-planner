import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const getFlightData = async (
  departure: string,
  arrival: string,
  dateOfDeparture: string,
  flightNumber: string
) => {
  //format date for API call
  const dateFormatted = dateOfDeparture.replaceAll("/", "");
  console.log("Formatted Date for API:", dateFormatted);
  //get flight number eg BA472 split it into BA and 472
  const flightNumberSplit = flightNumber.match(/([a-zA-Z]+)([0-9]+)/);
  const airline = flightNumberSplit ? flightNumberSplit[1] : String;
  const flight = flightNumberSplit ? flightNumberSplit[2] : Number;

  const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/${departure}/${arrival}/${dateFormatted}`;
  console.log("Requesting URL:", url);

  const options = {
    method: "GET",
    url: url,
    params: {
      Airline: airline,
      FlightNumber: flight,
    },
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "timetable-lookup.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("XML Data:", response.data);

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@",
      textNodeName: "#text",
      parseAttributeValue: true,
    });

    const jsonData = parser.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error in API Call:", error);
    throw new Error("Failed to fetch data");
  }
};

export default getFlightData;
