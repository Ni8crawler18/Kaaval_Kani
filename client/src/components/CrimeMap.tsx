import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useLanguage } from '../context/LanguageContext';

// Fix for default marker icon in React-Leaflet
// This is needed because the default marker icons are not properly loaded in React
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Tuticorin coordinates
const TUTICORIN_CENTER = [8.7642, 78.1348];

// Mock crime data
const crimeData = [
  { id: 1, type: 'Theft', location: [8.7642, 78.1348], date: '2023-04-15', time: '14:30', description: 'Mobile phone theft reported at market area' },
  { id: 2, type: 'Assault', location: [8.7542, 78.1248], date: '2023-04-14', time: '22:15', description: 'Physical assault reported near bus station' },
  { id: 3, type: 'Burglary', location: [8.7742, 78.1448], date: '2023-04-13', time: '03:45', description: 'Home break-in reported in residential area' },
  { id: 4, type: 'Vandalism', location: [8.7592, 78.1298], date: '2023-04-12', time: '19:20', description: 'Property damage reported at local shop' },
  { id: 5, type: 'Robbery', location: [8.7692, 78.1398], date: '2023-04-11', time: '21:10', description: 'Armed robbery at convenience store' },
];

// Hotspot data (areas with high crime concentration)
const hotspotData = [
  { id: 1, location: [8.7642, 78.1348], radius: 500, intensity: 'high' },
  { id: 2, location: [8.7542, 78.1248], radius: 300, intensity: 'medium' },
  { id: 3, location: [8.7742, 78.1448], radius: 400, intensity: 'low' },
];

const CrimeMap: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <MapContainer 
      center={TUTICORIN_CENTER} 
      zoom={13} 
      style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Render hotspots */}
      {hotspotData.map(hotspot => (
        <Circle
          key={`hotspot-${hotspot.id}`}
          center={hotspot.location as [number, number]}
          radius={hotspot.radius}
          pathOptions={{ 
            fillColor: 
              hotspot.intensity === 'high' ? '#ef4444' : 
              hotspot.intensity === 'medium' ? '#f97316' : 
              '#eab308',
            fillOpacity: 0.5,
            weight: 1,
            color: 'white'
          }}
        />
      ))}
      
      {/* Render crime markers */}
      {crimeData.map(crime => (
        <Marker 
          key={crime.id} 
          position={crime.location as [number, number]} 
          icon={defaultIcon}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{t(crime.type)}</h3>
              <p className="text-sm">{crime.date} at {crime.time}</p>
              <p className="text-sm mt-1">{crime.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CrimeMap;