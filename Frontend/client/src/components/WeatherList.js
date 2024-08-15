import React, { useState } from "react";
import {
  getWeatherDataByCoords,
  removeFavoriteCity,
} from "../services/weatherService";
import WeatherDetailsModal from "./WeatherDetailsModal";

function WeatherList({ cities }) {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = async (city) => {
    const { lat, long } = city;

    try {
      const response = await getWeatherDataByCoords(lat, long);

      setSelectedCity(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  const handleRemoveCity = async (cityId) => {
    try {
      await removeFavoriteCity(cityId);
      window.location.reload();
    } catch (error) {
      console.error("Error removing city from favorites:", error);
    }
  };

  return (
    <div>
      {cities.map((city, index) => (
        <div
          key={index}
          className="city-card"
          onClick={() => handleCityClick(city)}
        >
          <h3>
            {city.name}, {city.country}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveCity(city.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
      <WeatherDetailsModal
        isOpen={!!selectedCity}
        onRequestClose={closeModal}
        city={selectedCity}
      />
    </div>
  );
}

export default WeatherList;
