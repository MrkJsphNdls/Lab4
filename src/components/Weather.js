import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '7563f0cecf3201b8e27fc5cca7b5db4c';
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <WeatherForm onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <WeatherDetails weather={weather} />
    </div>
  );
};

export default Weather;