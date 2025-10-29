import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 23,
    temp: 24,
    humidity: 23,
    tempMin: 23,
    tempMax: 24,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
