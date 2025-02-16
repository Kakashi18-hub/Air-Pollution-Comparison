import React from 'react';
import { Factory, Car, Siren as Fire, Building2 } from 'lucide-react';

const PollutionCauses = () => {
  const causes = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Industrial Emissions',
      description: 'Manufacturing, power generation, and industrial processes release harmful pollutants including particulate matter and toxic gases.',
      percentage: 40
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: 'Vehicle Emissions',
      description: 'Transportation sector contributes significantly through exhaust emissions from cars, trucks, and other vehicles.',
      percentage: 25
    },
    {
      icon: <Fire className="h-6 w-6" />,
      title: 'Agricultural Burning',
      description: 'Crop burning and agricultural waste disposal release smoke and particulate matter into the atmosphere.',
      percentage: 20
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Construction & Dust',
      description: 'Construction activities, road dust, and natural sources contribute to particulate matter pollution.',
      percentage: 15
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-100">Major Causes of Air Pollution</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {causes.map((cause) => (
          <div key={cause.title} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-violet-900/50 rounded-lg text-violet-300">
                {cause.icon}
              </div>
              <h3 className="ml-3 font-medium text-lg text-gray-200">{cause.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{cause.description}</p>
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Contribution</span>
                <span className="text-sm text-gray-400">{cause.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                  style={{ width: `${cause.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium mb-3 text-gray-200">Solutions and Recommendations</h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Implement stricter emission controls on industries</li>
          <li>• Promote electric vehicles and public transportation</li>
          <li>• Develop sustainable agricultural practices</li>
          <li>• Improve dust management in construction</li>
          <li>• Increase green cover in urban areas</li>
        </ul>
      </div>
    </div>
  );
};

export default PollutionCauses;