import React from 'react';

interface WeatherChartProps {
  temperature: number;
  unit: string;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ temperature, unit }) => {
  const getBackgroundColor = () => {
    const hue = 240 - (temperature / (unit === '°C' ? 40 : 104)) * 240;
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Temperature</h2>
      <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${(temperature / (unit === '°C' ? 40 : 104)) * 100}%`,
            backgroundColor: getBackgroundColor(),
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-sm text-gray-600">
        <span>{unit === '°C' ? '0°C' : '32°F'}</span>
        <span>{unit === '°C' ? '40°C' : '104°F'}</span>
      </div>
    </div>
  );
};

export default WeatherChart;