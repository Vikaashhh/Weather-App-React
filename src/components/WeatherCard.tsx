import React from 'react';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  icon: React.ReactNode;
  date: string;
  unit: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, condition, icon, date, unit }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-4xl font-bold">{temperature}{unit}</h1>
        <p className="text-gray-600">{condition}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="text-blue-500">
        {icon}
      </div>
    </div>
  );
};

export default WeatherCard;