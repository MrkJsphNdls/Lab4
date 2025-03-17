# React Based Weather App

## Project Description
The Weather App is a simple React application that allows users to search for place or city and it shows the current and accurate weather and temperature of the place/city. It fetches data from the OpenWeatherMap API.

## Features
- **City Search**: Users can enter a city name to show weather information.
- **Current Weather Display**: The app shows the current temperature in Celsius and a brief description of the weather.
- **Error Handling**: The app handles errors gracefully, providing feedback if the city name is invalid or if there are issues fetching data.
- **Loading State**: A loading indicator is displayed while the weather data is being fetched.

## API Source
This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You can sign up for a free API key to access the weather data.

## Explanation of `useState` and `useEffect` Usage

### `useState`
- The `useState` hook is for state management in functional components. In this application, I used `useState` to manage state data variables (this includes weather data, loading status, or errors).
- For example:
  ```javascript
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);