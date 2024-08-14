import React from 'react';

function WeatherList({ cities, removeCity }) {
    return (
        <div>
            {cities.map((city, index) => (
                <div key={index} className="city-card">
                    <h3>{city.name}</h3>
                    <p>Temperatura: {city.main.temp}°C</p>
                    <p>Clima: {city.weather[0].description}</p>
                    <button onClick={() => removeCity(index)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}

export default WeatherList;
