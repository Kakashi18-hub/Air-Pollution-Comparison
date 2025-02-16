import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const ComparisonChart = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['Bangladesh']);
  
  const allCountries = [
    { name: 'Bangladesh', aqi: 76.9 },
    { name: 'Pakistan', aqi: 66.8 },
    { name: 'India', aqi: 58.1 },
    { name: 'Mongolia', aqi: 46.6 },
    { name: 'China', aqi: 39.2 },
    { name: 'Indonesia', aqi: 35.7 },
    { name: 'Vietnam', aqi: 34.1 },
    { name: 'Thailand', aqi: 25.4 },
    { name: 'South Korea', aqi: 23.3 },
    { name: 'Japan', aqi: 11.2 }
  ];

  const maxAQI = Math.max(...allCountries.map(country => country.aqi));

  const handleAddCountry = (country: string) => {
    if (selectedCountries.length < 5 && !selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleRemoveCountry = (country: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== country));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-100">Country Air Quality Comparison</h2>
      
      {/* Country Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCountries.map((country) => (
            <div
              key={country}
              className="bg-violet-900/50 text-violet-100 px-3 py-1 rounded-full flex items-center border border-violet-700"
            >
              <span>{country}</span>
              <button
                onClick={() => handleRemoveCountry(country)}
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
            onChange={(e) => handleAddCountry(e.target.value)}
            value=""
          >
            <option value="" disabled>Add country to compare (max 5)</option>
            {allCountries
              .filter(country => !selectedCountries.includes(country.name))
              .map(country => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))
            }
          </select>
          <Plus className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="space-y-4">
        {selectedCountries.map((countryName) => {
          const country = allCountries.find(c => c.name === countryName)!;
          return (
            <div key={country.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-200">{country.name}</span>
                <span className="text-sm text-gray-400">{country.aqi} µg/m³</span>
              </div>
              <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                  style={{ width: `${(country.aqi / maxAQI) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium mb-2 text-gray-200">Understanding the Data</h3>
        <p className="text-sm text-gray-400">
          Values shown are annual mean PM2.5 concentrations in micrograms per cubic meter (µg/m³).
          The World Health Organization guideline for annual mean PM2.5 is 10 µg/m³.
          Select up to 5 countries to compare their air quality levels.
        </p>
      </div>
    </div>
  );
};

export default ComparisonChart;