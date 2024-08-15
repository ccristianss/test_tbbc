import React, { useState } from "react";
import {
  getWeatherDataByCity,
  addFavoriteCity,
} from "../services/weatherService";

function WeatherForm() {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getWeatherDataByCity(city);

      const { name, sys, coord } = response.data;
      const cityData = {
        name,
        lat: coord.lat,
        long: coord.lon,
        country: sys.country,
      };
      await addFavoriteCity(cityData);
      setCity("");
      window.location.reload();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Introducir ciudad"
      />
      <button type="submit">Agregar Ciudad</button>
    </form>
  );
}

export default WeatherForm;
