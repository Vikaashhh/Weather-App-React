import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';
import WeatherCard from './components/WeatherCard';
import WeatherChart from './components/WeatherChart';
import WeatherForecast from './components/WeatherForecast';

const App: React.FC = () => {
  const [city, setCity] = useState('London');
  const [unit, setUnit] = useState('°F');
  const [weatherData, setWeatherData] = useState({
    temperature: 72,
    condition: 'Cloudy',
    humidity: 45,
    windSpeed: 19.2,
    date: '5:05 PM, Mon, Nov 23, 2020',
    forecast: [
      { date: 'Today', condition: 'Cloudy', humidity: 30 },
      { date: 'Nov 24', condition: 'Cloudy', humidity: 36 },
      { date: 'Nov 25', condition: 'Sunny', humidity: 20 },
      { date: 'Nov 26', condition: 'Sunny', humidity: 15 },
    ],
  });

  const fetchWeatherData = (cityName: string) => {
    // Simulated API call
    setTimeout(() => {
      const newData = {
        ...weatherData,
        temperature: Math.floor(Math.random() * 30) + 60,
        condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
        humidity: Math.floor(Math.random() * 50) + 30,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        date: new Date().toLocaleString(),
      };
      setWeatherData(newData);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'cloudy':
        return <Cloud className="w-16 h-16" />;
      case 'sunny':
        return <Sun className="w-16 h-16" />;
      case 'rainy':
        return <CloudRain className="w-16 h-16" />;
      default:
        return <Cloud className="w-16 h-16" />;
    }
  };

  const convertTemperature = (temp: number): number => {
    if (unit === '°C') {
      return Math.round((temp - 32) * 5 / 9);
    }
    return Math.round(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Search
              </button>
            </div>
          </form>

          <WeatherCard
            temperature={convertTemperature(weatherData.temperature)}
            condition={weatherData.condition}
            icon={getWeatherIcon(weatherData.condition)}
            date={weatherData.date}
            unit={unit}
          />

          <WeatherChart temperature={convertTemperature(weatherData.temperature)} unit={unit} />

          <WeatherForecast forecast={weatherData.forecast} />
        </div>

        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-500">Humidity</p>
            <p className="text-lg font-semibold">{weatherData.humidity}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Wind speed</p>
            <p className="text-lg font-semibold">{weatherData.windSpeed} km/h</p>
          </div>
          <div>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="°F">°F</option>
              <option value="°C">°C</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;