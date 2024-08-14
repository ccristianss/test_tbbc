import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };
  
  const removeCity = (index) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Ciudades Favoritas</h1>
      <WeatherForm addCity={addCity} />{" "}
      <WeatherList cities={cities} removeCity={removeCity} />
    </div>
  );
}

export default App;
