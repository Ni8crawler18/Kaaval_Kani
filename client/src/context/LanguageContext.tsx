import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the language context type
type LanguageContextType = {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translation dictionary
const translations: Record<string, Record<string, string>> = {
  // Dashboard
  'Dashboard': { en: 'Dashboard', ta: 'கட்டுப்பாட்டு அறை' },
  'Crime Map': { en: 'Crime Map', ta: 'குற்ற வரைபடம்' },
  'Analytics': { en: 'Analytics', ta: 'பகுப்பாய்வு' },
  'Reports': { en: 'Reports', ta: 'அறிக்கைகள்' },
  'Alerts': { en: 'Alerts', ta: 'எச்சரிக்கைகள்' },
  'Settings': { en: 'Settings', ta: 'அமைப்புகள்' },
  'Help': { en: 'Help', ta: 'உதவி' },
  'Crime Dashboard': { en: 'Crime Dashboard', ta: 'குற்ற கட்டுப்பாட்டு அறை' },
  'Day': { en: 'Day', ta: 'நாள்' },
  'Week': { en: 'Week', ta: 'வாரம்' },
  'Month': { en: 'Month', ta: 'மாதம்' },
  'Active Alerts': { en: 'Active Alerts', ta: 'செயலில் உள்ள எச்சரிக்கைகள்' },
  'Crime Rate': { en: 'Crime Rate', ta: 'குற்ற விகிதம்' },
  'Patrol Units': { en: 'Patrol Units', ta: 'ரோந்து பிரிவுகள்' },
  'Response Time': { en: 'Response Time', ta: 'பதில் நேரம்' },
  'Crime Heatmap': { en: 'Crime Heatmap', ta: 'குற்ற வெப்ப வரைபடம்' },
  'Recent Alerts': { en: 'Recent Alerts', ta: 'சமீபத்திய எச்சரிக்கைகள்' },
  'Crime Statistics': { en: 'Crime Statistics', ta: 'குற்ற புள்ளிவிவரங்கள்' },
  'Crime Trends': { en: 'Crime Trends', ta: 'குற்ற போக்குகள்' },
  'Crime Prediction': { en: 'Crime Prediction', ta: 'குற்ற முன்கணிப்பு' },
  
  // Crime types
  'Theft': { en: 'Theft', ta: 'திருட்டு' },
  'Assault': { en: 'Assault', ta: 'தாக்குதல்' },
  'Burglary': { en: 'Burglary', ta: 'கொள்ளை' },
  'Vandalism': { en: 'Vandalism', ta: 'சொத்து சேதம்' },
  'Robbery': { en: 'Robbery', ta: 'கொள்ளை' },
  'Smuggling': { en: 'Smuggling', ta: 'கடத்தல்' },
  
  // Locations
  'Market Area': { en: 'Market Area', ta: 'சந்தை பகுதி' },
  'Harbor Zone': { en: 'Harbor Zone', ta: 'துறைமுக மண்டலம்' },
  'Residential Block C': { en: 'Residential Block C', ta: 'குடியிருப்பு தொகுதி C' },
  'All Areas': { en: 'All Areas', ta: 'அனைத்து பகுதிகள்' },
  'Market': { en: 'Market', ta: 'சந்தை' },
  'Harbor': { en: 'Harbor', ta: 'துறைமுகம்' },
  'Residential': { en: 'Residential', ta: 'குடியிருப்பு' },
  
  // Time-related
  'Today': { en: 'Today', ta: 'இன்று' },
  'Tomorrow': { en: 'Tomorrow', ta: 'நாளை' },
  'minutes ago': { en: 'minutes ago', ta: 'நிமிடங்களுக்கு முன்பு' },
  'hour ago': { en: 'hour ago', ta: 'மணி நேரத்திற்கு முன்பு' },
  'hours ago': { en: 'hours ago', ta: 'மணி நேரத்திற்கு முன்பு' },
  
  // Login page
  'Login': { en: 'Login', ta: 'உள்நுழைக' },
  'Username': { en: 'Username', ta: 'பயனர்பெயர்' },
  'Password': { en: 'Password', ta: 'கடவுச்சொல்' },
  'Sign In': { en: 'Sign In', ta: 'உள்நுழைக' },
  'Kaaval Kani': { en: 'Kaaval Kani', ta: 'காவல் கணி' },
  'Crime Analysis & Prediction System': { en: 'Crime Analysis & Prediction System', ta: 'குற்ற பகுப்பாய்வு & முன்கணிப்பு அமைப்பு' },
  'Tuticorin Police Department': { en: 'Tuticorin Police Department', ta: 'தூத்துக்குடி காவல்துறை' },
  
  // Misc
  'Logout': { en: 'Logout', ta: 'வெளியேறு' },
  'Profile': { en: 'Profile', ta: 'சுயவிவரம்' },
  'Language': { en: 'Language', ta: 'மொழி' },
  'English': { en: 'English', ta: 'ஆங்கிலம்' },
  'Tamil': { en: 'Tamil', ta: 'தமிழ்' },
  'Probability': { en: 'Probability', ta: 'நிகழ்தகவு' },
  'Contributing Factors': { en: 'Contributing Factors', ta: 'பங்களிக்கும் காரணிகள்' },
  'Number of Incidents': { en: 'Number of Incidents', ta: 'சம்பவங்களின் எண்ணிக்கை' },
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    
    // For time strings that include numbers (like "10 minutes ago")
    if (key.includes('minutes ago')) {
      const parts = key.split(' ');
      const number = parts[0];
      return `${number} ${translations['minutes ago'][language]}`;
    }
    
    if (key.includes('hour ago') || key.includes('hours ago')) {
      const parts = key.split(' ');
      const number = parts[0];
      return `${number} ${translations['hours ago'][language]}`;
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);