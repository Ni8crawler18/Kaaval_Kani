import React from 'react';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Mock alert data
const alertsData = [
  { 
    id: 1, 
    type: 'Theft', 
    location: 'Market Area, Tuticorin', 
    time: '10 minutes ago',
    severity: 'high',
    description: 'Multiple mobile phone thefts reported in crowded market area'
  },
  { 
    id: 2, 
    type: 'Suspicious Activity', 
    location: 'Harbor, Tuticorin', 
    time: '25 minutes ago',
    severity: 'medium',
    description: 'Suspicious individuals loitering near cargo storage area'
  },
  { 
    id: 3, 
    type: 'Distress Call', 
    location: 'Residential Block C, Tuticorin', 
    time: '45 minutes ago',
    severity: 'high',
    description: 'Elderly resident reported home invasion attempt'
  },
  { 
    id: 4, 
    type: 'Traffic Incident', 
    location: 'Main Road Junction, Tuticorin', 
    time: '1 hour ago',
    severity: 'medium',
    description: 'Multiple vehicle collision causing traffic congestion'
  },
  { 
    id: 5, 
    type: 'Public Disturbance', 
    location: 'Central Park, Tuticorin', 
    time: '1.5 hours ago',
    severity: 'low',
    description: 'Group altercation reported by multiple witnesses'
  },
];

const RecentAlerts: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-4">
      {alertsData.map(alert => (
        <div 
          key={alert.id} 
          className={`p-4 rounded-lg border-l-4 ${
            alert.severity === 'high' 
              ? 'border-red-500 bg-red-50' 
              : alert.severity === 'medium'
                ? 'border-orange-500 bg-orange-50'
                : 'border-yellow-500 bg-yellow-50'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <AlertTriangle className={`h-5 w-5 ${
                alert.severity === 'high' 
                  ? 'text-red-500' 
                  : alert.severity === 'medium'
                    ? 'text-orange-500'
                    : 'text-yellow-500'
              }`} />
              <span className="ml-2 font-medium">{t(alert.type)}</span>
            </div>
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {t(alert.time)}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{alert.description}</p>
          <div className="mt-2 flex items-center text-xs text-gray-500">
            <MapPin className="h-3 w-3 mr-1" />
            {alert.location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentAlerts;