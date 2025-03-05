import React, { useState } from 'react';
import { Bell, Shield, Map, User, Lock, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SettingsPage: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{t('Settings')}</h2>
        <p className="mt-1 text-sm text-gray-600">
          {t('Configure system preferences and account settings')}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="sm:flex sm:divide-x">
          {/* Sidebar */}
          <nav className="sm:w-64 p-4 sm:p-6 bg-gray-50">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('general')}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'general' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Shield className="h-4 w-4 mr-2" />
                {t('General')}
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'notifications' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Bell className="h-4 w-4 mr-2" />
                {t('Notifications')}
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'map' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Map className="h-4 w-4 mr-2" />
                {t('Map Settings')}
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'account' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                {t('Account')}
              </button>
              <button
                onClick={() => setActiveTab('language')}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'language' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Languages className="h-4 w-4 mr-2" />
                {t('Language')}
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="p-4 sm:p-6 flex-1">
            {activeTab === 'general' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('General Settings')}</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('System Name')}
                    </label>
                    <input
                      type="text"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="Kaaval Kani - Tuticorin"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Department')}
                    </label>
                    <input
                      type="text"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="Tuticorin Police Department"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Time Zone')}
                    </label>
                    <select
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="Asia/Kolkata"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="dark-mode"
                      name="dark-mode"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="dark-mode" className="ml-2 block text-sm text-gray-900">
                      {t('Enable Dark Mode')}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('Notification Settings')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{t('Alert Notifications')}</h4>
                      <p className="text-sm text-gray-500">{t('Receive notifications for new alerts')}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{t('High Priority Only')}</h4>
                        <p className="text-sm text-gray-500">{t('Only notify for high priority alerts')}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{t('Sound Alerts')}</h4>
                        <p className="text-sm text-gray-500">{t('Play sound when new alerts arrive')}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{t('Prediction Notifications')}</h4>
                        <p className="text-sm text-gray-500">{t('Receive notifications for new crime predictions')}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('Map Settings')}</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Default Map View')}
                    </label>
                    <select
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="street"
                    >
                      <option value="street">{t('Street View')}</option>
                      <option value="satellite">{t('Satellite')}</option>
                      <option value="hybrid">{t('Hybrid')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Default Zoom Level')}
                    </label>
                    <select
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="13"
                    >
                      <option value="10">{t('City Overview')}</option>
                      <option value="13">{t('District Level')}</option>
                      <option value="15">{t('Neighborhood')}</option>
                      <option value="17">{t('Street Level')}</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="show-hotspots"
                      name="show-hotspots"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label htmlFor="show-hotspots" className="ml-2 block text-sm text-gray-900">
                      {t('Show Crime Hotspots')}
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="show-patrol"
                      name="show-patrol"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label htmlFor="show-patrol" className="ml-2 block text-sm text-gray-900">
                      {t('Show Patrol Units')}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('Account Settings')}</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-16 w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        {t('Change Avatar')}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Name')}
                    </label>
                    <input
                      type="text"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="Officer Kumar"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Email')}
                    </label>
                    <input
                      type="email"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="kumar@tuticorinpolice.gov.in"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Badge Number')}
                    </label>
                    <input
                      type="text"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="TN-4578"
                      readOnly
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <Lock className="h-4 w-4 mr-2" />
                      {t('Change Password')}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'language' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('Language Settings')}</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('Select Language')}
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="language-english"
                          name="language"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={language === 'en'}
                          onChange={() => setLanguage('en')}
                        />
                        <label htmlFor="language-english" className="ml-3 block text-sm text-gray-700">
                          English
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="language-tamil"
                          name="language"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={language === 'ta'}
                          onChange={() => setLanguage('ta')}
                        />
                        <label htmlFor="language-tamil" className="ml-3 block text-sm text-gray-700">
                          தமிழ் (Tamil)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Languages className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">{t('Language Support')}</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>
                            {language === 'en' 
                              ? "The system supports English and Tamil languages. All reports and alerts can be displayed in either language based on your preference."
                              : "இந்த அமைப்பு ஆங்கிலம் மற்றும் தமிழ் மொழிகளை ஆதரிக்கிறது. உங்கள் விருப்பத்தின் அடிப்படையில் அனைத்து அறிக்கைகள் மற்றும் எச்சரிக்கைகளையும் எந்த மொழியிலும் காட்டலாம்."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;