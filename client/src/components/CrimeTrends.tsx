import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

interface CrimeTrendsProps {
  timeRange: string;
}

// Mock data for different time ranges
const dayData = [
  { time: '00:00', incidents: 2 },
  { time: '03:00', incidents: 1 },
  { time: '06:00', incidents: 3 },
  { time: '09:00', incidents: 5 },
  { time: '12:00', incidents: 8 },
  { time: '15:00', incidents: 10 },
  { time: '18:00', incidents: 12 },
  { time: '21:00', incidents: 7 },
];

const weekData = [
  { time: 'Mon', incidents: 15 },
  { time: 'Tue', incidents: 12 },
  { time: 'Wed', incidents: 18 },
  { time: 'Thu', incidents: 20 },
  { time: 'Fri', incidents: 25 },
  { time: 'Sat', incidents: 30 },
  { time: 'Sun', incidents: 22 },
];

const monthData = [
  { time: 'Week 1', incidents: 85 },
  { time: 'Week 2', incidents: 92 },
  { time: 'Week 3', incidents: 78 },
  { time: 'Week 4', incidents: 95 },
];

const CrimeTrends: React.FC<CrimeTrendsProps> = ({ timeRange }) => {
  const { t } = useLanguage();
  
  // Select data based on time range
  const data = timeRange === 'day' ? dayData : timeRange === 'week' ? weekData : monthData;

  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="incidents" 
            name={t('Number of Incidents')}
            stroke="#3b82f6" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CrimeTrends;