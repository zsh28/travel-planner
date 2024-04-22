import axios from "axios";
import { XMLParser } from "fast-xml-parser";

// This has more than 4 values being passed to it, generally when you have more than 3, you should likely use them as an object to benefit from readability and autocomplete
const getFlightData = async (
  departure: string,
  arrival: string,
  dateOfDeparture: string,
  flightNumber: string
) => {
  //format date for API call
  const dateFormatted = dateOfDeparture.replaceAll("/", "");

  //get flight number eg BA472 split it into BA and 472
  const flightNumberSplit = flightNumber.match(/([a-zA-Z]+)([0-9]+)/);

  // Generally you should never use String, Number, etc with capital numbers. These are not the actual types or values. They are class constructors.
  // If you did ``typeof`` on them, they would return type of `object`.
  const airline = flightNumberSplit ? flightNumberSplit[1] : String;
  const flight = flightNumberSplit ? flightNumberSplit[2] : Number;

  const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/${departure}/${arrival}/${dateFormatted}`;

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

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@",
      textNodeName: "#text",
      parseAttributeValue: true,
    });

    const jsonData = parser.parse(response.data);
    return jsonData;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default getFlightData;
