import React from 'react';
import { Wind } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Wind className="h-8 w-8 text-violet-400" />
            <h1 className="ml-2 text-2xl font-bold text-gray-100">Global Air Quality Index</h1>
          </div>
          <p className="text-sm text-gray-400">Monitoring Earth's Air Quality</p>
        </div>
      </div>
    </header>
  );
};

export default Header;