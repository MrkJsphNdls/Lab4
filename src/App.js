// src/App.js
import React from 'react';
import Weather from './components/Weather'; // Import the Weather component
import './App.css'; // Optional: Import your CSS styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1> {/* Title of the app */}
        <Weather /> {/* Render the Weather component */}
      </header>
    </div>
  );
}

export default App;