import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import { getUser, fetchCities, logoutUser } from "./services/weatherService";

function App() {
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((response) => {
        setUser(response.data.user);
        if (response.data.isAuthenticated) {
          fetchCities()
            .then((response) => setCities(response.data))
            .catch((error) => console.log("Error fetching cities:", error));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const logout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        setCities([]);
      })
      .catch((error) => console.log("Error logging out:", error));
  };

  return (
    <div className="App">
      <h1>Ciudades Favoritas</h1>

      {user ? (
        <div>
          <p>Hola, {user.displayName}!</p>
          <button onClick={() => logout()}>Salir</button>
          <WeatherForm />
          <WeatherList cities={cities} />
        </div>
      ) : (
        <a href="http://localhost:3092/auth/google">
          Iniciar sesión con Google
        </a>
      )}
    </div>
  );
}

export default App;
