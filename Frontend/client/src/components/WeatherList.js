import React, { useState }  from "react";
import WeatherDetailsModal from "./WeatherDetailsModal";

function WeatherList({ cities, removeCity }) {

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  return (
    <div>
      {cities.map((city, index) => (
        <div
          key={index}
          className="city-card"
          onClick={() => handleCityClick(city)}
        >
          <h3>{city.name}</h3>
          <p>Temperatura: {city.main.temp}°C</p>
          <p>Clima: {city.weather[0].description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeCity(index);
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
