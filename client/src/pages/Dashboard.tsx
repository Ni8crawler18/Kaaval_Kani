import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Users, Clock } from 'lucide-react';
import CrimeMap from '../components/CrimeMap';
import CrimeStats from '../components/CrimeStats';
import RecentAlerts from '../components/RecentAlerts';
import CrimeTrends from '../components/CrimeTrends';
import PredictionPanel from '../components/PredictionPanel';
import { useLanguage } from '../context/LanguageContext';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Time Range Selector */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">{t('Crime Dashboard')}</h2>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center">
          <div className="rounded-full bg-red-100 p-3 mr-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('Active Alerts')}</p>
            <p className="text-2xl font-semibold text-gray-900">12</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('Crime Rate')}</p>
            <p className="text-2xl font-semibold text-gray-900">+2.5%</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('Patrol Units')}</p>
            <p className="text-2xl font-semibold text-gray-900">24</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('Response Time')}</p>
            <p className="text-2xl font-semibold text-gray-900">8.2 min</p>
          </div>
        </div>
      </div>

      {/* Map and Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Crime Heatmap')}</h3>
          </div>
          <div className="p-4 h-96">
            <CrimeMap />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Recent Alerts')}</h3>
          </div>
          <div className="p-4 h-96 overflow-y-auto">
            <RecentAlerts />
          </div>
        </div>
      </div>

      {/* Crime Stats and Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Crime Statistics')}</h3>
          </div>
          <div className="p-4 h-80">
            <CrimeStats timeRange={timeRange} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{t('Crime Trends')}</h3>
          </div>
          <div className="p-4 h-80">
            <CrimeTrends timeRange={timeRange} />
          </div>
        </div>
      </div>

      {/* Prediction Panel */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">{t('Crime Prediction')}</h3>
        </div>
        <div className="p-4">
          <PredictionPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;