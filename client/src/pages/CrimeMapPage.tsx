import React, { useState } from 'react';
import CrimeMap from '../components/CrimeMap';
import { useLanguage } from '../context/LanguageContext';

const CrimeMapPage: React.FC = () => {
  const { t } = useLanguage();
  const [mapFilter, setMapFilter] = useState('all');

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{t('Crime Map')}</h2>
        <p className="mt-1 text-sm text-gray-600">
          {t('Visualize crime incidents and hotspots across Tuticorin')}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">{t('Crime Heatmap')}</h3>
          
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 text-sm rounded-md ${mapFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setMapFilter('all')}
            >
              {t('All Crimes')}
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${mapFilter === 'theft' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setMapFilter('theft')}
            >
              {t('Theft')}
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${mapFilter === 'assault' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setMapFilter('assault')}
            >
              {t('Assault')}
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${mapFilter === 'burglary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setMapFilter('burglary')}
            >
              {t('Burglary')}
            </button>
          </div>
        </div>
        <div className="p-4 h-[calc(100vh-240px)]">
          <CrimeMap />
        </div>
      </div>
    </div>
  );
};

export default CrimeMapPage;