import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3092/auth/user")
      .then((response) => setUser(response.data.user))
      .catch((error) => console.log(error));
  }, []);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  const removeCity = (index) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Ciudades Favoritas</h1>

      {user ? (
        <div>
          <p>Hola, {user.displayName}!</p>
          <button onClick={() => axios.get("/logout")}>Salir</button>
          <WeatherForm addCity={addCity} />
          <WeatherList cities={cities} removeCity={removeCity} />
        </div>
      ) : (
        <a href="http://localhost:3092/auth/google">Iniciar sesión con Google</a>
      )}
    </div>
  );
}

export default App;
