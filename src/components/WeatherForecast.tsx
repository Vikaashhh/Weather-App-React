import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface ForecastDay {
  date: string;
  condition: string;
  humidity: number;
}

interface WeatherForecastProps {
  forecast: ForecastDay[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'cloudy':
        return <Cloud className="w-6 h-6" />;
      case 'sunny':
        return <Sun className="w-6 h-6" />;
      case 'rainy':
        return <CloudRain className="w-6 h-6" />;
      default:
        return <Cloud className="w-6 h-6" />;
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Forecast</h2>
      <div className="grid grid-cols-4 gap-2">
        {forecast.map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-sm font-medium">{day.date}</p>
            <div className="flex justify-center my-1 text-blue-500">
              {getWeatherIcon(day.condition)}
            </div>
            <p className="text-xs text-gray-600">
              {day.humidity}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;