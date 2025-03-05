import React, { useState } from 'react';
import CrimeStats from '../components/CrimeStats';
import CrimeTrends from '../components/CrimeTrends';
import { useLanguage } from '../context/LanguageContext';

const AnalyticsPage: React.FC = () => {
  const { t } = useLanguage();
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{t('Analytics')}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {t('Detailed crime statistics and trend analysis')}
          </p>
        </div>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${timeRange === 'day' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => setTimeRange('day')}
          >
            {t('Day')}
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${timeRange === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => setTimeRange('week')}
          >
            {t('Week')}
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${timeRange === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => setTimeRange('month')}
          >
            {t('Month')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Crime Statistics')}</h3>
          </div>
          <div className="p-4 h-96">
            <CrimeStats timeRange={timeRange} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Crime Trends')}</h3>
          </div>
          <div className="p-4 h-96">
            <CrimeTrends timeRange={timeRange} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">{t('Crime Distribution by Location')}</h3>
        </div>
        <div className="p-4 h-96 flex items-center justify-center">
          <p className="text-gray-500">{t('Advanced analytics visualization coming soon')}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;