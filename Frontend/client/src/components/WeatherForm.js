import React, { useState } from 'react';
import axios from 'axios';

function WeatherForm({ addCity }) {
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3092/weather/${city}`);
            addCity(response.data);
            setCity('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
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
