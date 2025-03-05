import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

interface CrimeStatsProps {
  timeRange: string;
}

// Mock data for different time ranges
const dayData = [
  { name: 'Theft', count: 12 },
  { name: 'Assault', count: 5 },
  { name: 'Burglary', count: 3 },
  { name: 'Vandalism', count: 7 },
  { name: 'Robbery', count: 2 },
];

const weekData = [
  { name: 'Theft', count: 45 },
  { name: 'Assault', count: 28 },
  { name: 'Burglary', count: 19 },
  { name: 'Vandalism', count: 32 },
  { name: 'Robbery', count: 14 },
];

const monthData = [
  { name: 'Theft', count: 187 },
  { name: 'Assault', count: 103 },
  { name: 'Burglary', count: 76 },
  { name: 'Vandalism', count: 124 },
  { name: 'Robbery', count: 58 },
];

const CrimeStats: React.FC<CrimeStatsProps> = ({ timeRange }) => {
  const { t } = useLanguage();
  
  // Select data based on time range
  const data = timeRange === 'day' ? dayData : timeRange === 'week' ? weekData : monthData;
  
  // Translate data
  const translatedData = data.map(item => ({
    name: t(item.name),
    count: item.count
  }));

  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={translatedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name={t('Number of Incidents')} fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CrimeStats;