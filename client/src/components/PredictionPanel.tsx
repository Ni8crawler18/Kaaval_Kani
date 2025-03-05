import React, { useState } from 'react';
import { Calendar, Clock, MapPin, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Mock prediction data
const predictionData = [
  {
    id: 1,
    location: 'Market Area',
    crimeType: 'Theft',
    probability: 78,
    timeWindow: '14:00 - 18:00',
    date: 'Today',
    factors: ['Historical patterns', 'Crowded area', 'Recent incidents']
  },
  {
    id: 2,
    location: 'Harbor Zone',
    crimeType: 'Smuggling',
    probability: 65,
    timeWindow: '22:00 - 02:00',
    date: 'Today',
    factors: ['Shipping schedule', 'Limited surveillance', 'Intelligence reports']
  },
  {
    id: 3,
    location: 'Residential Block C',
    crimeType: 'Burglary',
    probability: 52,
    timeWindow: '01:00 - 04:00',
    date: 'Tomorrow',
    factors: ['Previous break-ins', 'Poor lighting', 'Unoccupied homes']
  }
];

const PredictionPanel: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('all');
  const { t } = useLanguage();

  // Filter predictions based on selected area
  const filteredPredictions = selectedArea === 'all' 
    ? predictionData 
    : predictionData.filter(pred => pred.location.toLowerCase().includes(selectedArea.toLowerCase()));

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button 
          className={`px-3 py-1 rounded-full text-sm ${selectedArea === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedArea('all')}
        >
          {t('All Areas')}
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${selectedArea === 'market' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedArea('market')}
        >
          {t('Market')}
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${selectedArea === 'harbor' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedArea('harbor')}
        >
          {t('Harbor')}
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${selectedArea === 'residential' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedArea('residential')}
        >
          {t('Residential')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPredictions.map(prediction => (
          <div key={prediction.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{t(prediction.crimeType)}</h4>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  prediction.probability > 70 ? 'bg-red-100 text-red-800' :
                  prediction.probability > 50 ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {prediction.probability}% {t('Probability')}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {t(prediction.location)}
              </div>
              <div className="flex items-center mb-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {t(prediction.date)}
              </div>
              <div className="flex items-center mb-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {prediction.timeWindow}
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-1">{t('Contributing Factors')}:</p>
                <ul className="text-xs text-gray-600 list-disc pl-5">
                  {prediction.factors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionPanel;