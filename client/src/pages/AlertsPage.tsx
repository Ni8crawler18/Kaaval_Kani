import React, { useState } from 'react';
import { AlertTriangle, Bell, BellOff, Filter } from 'lucide-react';
import RecentAlerts from '../components/RecentAlerts';
import { useLanguage } from '../context/LanguageContext';

const AlertsPage: React.FC = () => {
  const { t } = useLanguage();
  const [alertFilter, setAlertFilter] = useState('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{t('Alerts')}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {t('Monitor and respond to real-time crime alerts')}
          </p>
        </div>
        <button
          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          className={`flex items-center px-4 py-2 rounded-md ${
            notificationsEnabled 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {notificationsEnabled ? (
            <>
              <Bell className="h-4 w-4 mr-2" />
              {t('Notifications On')}
            </>
          ) : (
            <>
              <BellOff className="h-4 w-4 mr-2" />
              {t('Notifications Off')}
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">{t('Filter Alerts')}</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <button
                  onClick={() => setAlertFilter('all')}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    alertFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  {t('All Alerts')}
                </button>
                <button
                  onClick={() => setAlertFilter('high')}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    alertFilter === 'high' ? 'bg-red-100 text-red-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  {t('High Priority')}
                </button>
                <button
                  onClick={() => setAlertFilter('medium')}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    alertFilter === 'medium' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                  {t('Medium Priority')}
                </button>
                <button
                  onClick={() => setAlertFilter('low')}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    alertFilter === 'low' ? 'bg-yellow-100 text-yellow-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  {t('Low Priority')}
                </button>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">{t('Alert Types')}</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">{t('Theft')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">{t('Assault')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">{t('Burglary')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">{t('Suspicious Activity')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">{t('Distress Call')}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">{t('Recent Alerts')}</h3>
            </div>
            <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto">
              <RecentAlerts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;