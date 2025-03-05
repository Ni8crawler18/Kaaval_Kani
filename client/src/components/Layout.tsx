import React, { useState } from 'react';
import { Shield, LogOut, User, Languages } from 'lucide-react';
import Sidebar from './Sidebar';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'ta') => {
    setLanguage(lang);
    setProfileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="lg:hidden mr-2 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="ml-2 text-xl font-bold text-gray-900">{t('Kaaval Kani')}</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Languages className="h-4 w-4" />
                <span>{language === 'en' ? t('English') : t('Tamil')}</span>
              </div>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  <img
                    className="h-8 w-8 rounded-full border border-gray-300"
                    src="/user_logo.jpeg"
                    alt="User avatar"
                  />
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700">Officer Kumar</span>
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => handleLanguageChange('en')}
                    >
                      <Languages className="h-4 w-4 mr-2" />
                      {t('English')}
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => handleLanguageChange('ta')}
                    >
                      <Languages className="h-4 w-4 mr-2" />
                      {t('Tamil')}
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={onLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      {t('Logout')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;