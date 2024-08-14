import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';

function App() {
    const [cities, setCities] = useState([]);

    const addCity = (city) => {
        setCities([...cities, city]);
    };

    return (
        <div className="App">
            <h1>Ciudades Favoritas</h1>
            <WeatherForm addCity={addCity} />
        </div>
    );
}

export default App;