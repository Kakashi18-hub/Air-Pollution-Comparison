import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const CityComparison = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>(['Delhi, India']);

  const allCities = [
    { name: 'Delhi, India', aqi: 98.6 },
    { name: 'Dhaka, Bangladesh', aqi: 86.2 },
    { name: 'Lahore, Pakistan', aqi: 84.2 },
    { name: 'Kolkata, India', aqi: 72.1 },
    { name: 'Beijing, China', aqi: 42.7 },
    { name: 'Mumbai, India', aqi: 46.2 },
    { name: 'Shanghai, China', aqi: 38.4 },
    { name: 'Jakarta, Indonesia', aqi: 36.9 },
    { name: 'Seoul, South Korea', aqi: 24.8 },
    { name: 'Tokyo, Japan', aqi: 11.7 }
  ];

  const handleAddCity = (city: string) => {
    if (selectedCities.length < 6 && !selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (city: string) => {
    setSelectedCities(selectedCities.filter(c => c !== city));
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-100">City Air Quality Comparison</h2>

      {/* City Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCities.map((city) => (
            <div
              key={city}
              className="bg-violet-900/50 text-violet-100 px-3 py-1 rounded-full flex items-center border border-violet-700"
            >
              <span>{city}</span>
              <button
                onClick={() => handleRemoveCity(city)}
                className="ml-2 hover:text-violet-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="relative">
          <select
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100"
            onChange={(e) => handleAddCity(e.target.value)}
            value=""
          >
            <option value="" disabled>Add city to compare (max 6)</option>
            {allCities
              .filter(city => !selectedCities.includes(city.name))
              .map(city => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))
            }
          </select>
          <Plus className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* City Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedCities.map((cityName) => {
          const city = allCities.find(c => c.name === cityName)!;
          return (
            <div
              key={city.name}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-medium text-lg mb-2 text-gray-200">{city.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-full ${getAQIColor(city.aqi)} rounded-full transition-all duration-500`}
                      style={{ width: `${(city.aqi / 100) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium text-gray-300">
                  {city.aqi} AQI
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-gray-800/50 rounded-lg border border-green-900">
          <span className="font-medium text-green-400">Good (0-50)</span>
          <p className="text-gray-400">Air quality is satisfactory</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg border border-yellow-900">
          <span className="font-medium text-yellow-400">Moderate (51-100)</span>
          <p className="text-gray-400">Acceptable air quality</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg border border-red-900">
          <span className="font-medium text-red-400">Unhealthy (101+)</span>
          <p className="text-gray-400">Health warnings for sensitive groups</p>
        </div>
      </div>
    </div>
  );
};

export default CityComparison;