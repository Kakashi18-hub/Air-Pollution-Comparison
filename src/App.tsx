import React, { useState } from 'react';
import { Wind, MapPin, AlertTriangle, Info } from 'lucide-react';
import ComparisonChart from './components/ComparisonChart';
import CityComparison from './components/CityComparison';
import PollutionCauses from './components/PollutionCauses';
import Header from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState<'countries' | 'cities' | 'causes'>('countries');

  return (
    <div className="min-h-screen pollution-bg text-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg p-1">
            <button
              onClick={() => setActiveTab('countries')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'countries'
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Wind className="inline-block mr-2 h-4 w-4" />
              Countries
            </button>
            <button
              onClick={() => setActiveTab('cities')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'cities'
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <MapPin className="inline-block mr-2 h-4 w-4" />
              Cities
            </button>
            <button
              onClick={() => setActiveTab('causes')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'causes'
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <AlertTriangle className="inline-block mr-2 h-4 w-4" />
              Causes
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
          {activeTab === 'countries' && <ComparisonChart />}
          {activeTab === 'cities' && <CityComparison />}
          {activeTab === 'causes' && <PollutionCauses />}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-violet-400 mt-1 mr-2" />
            <p className="text-sm text-gray-300">
              The data presented is based on PM2.5 concentrations and Air Quality Index (AQI) measurements.
              Values are updated regularly to provide the most accurate comparison between different locations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;