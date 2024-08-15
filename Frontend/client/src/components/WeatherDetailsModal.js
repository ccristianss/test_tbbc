import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function WeatherDetailsModal({ isOpen, onRequestClose, city }) {
  if (!city) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del clima"
    >
      <h2>{city.name}</h2>
      <p>Temperatura: {city.main.temp}°C</p>
      <p>Sensación térmica: {city.main.feels_like}°C</p>
      <p>Humedad: {city.main.humidity}%</p>
      <p>Tiempo: {city.weather[0].description}</p>
      <p>Velocidad del viento: {city.wind.speed} m/s</p>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
}

export default WeatherDetailsModal;
