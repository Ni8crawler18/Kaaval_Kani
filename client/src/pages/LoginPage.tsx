import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { language, setLanguage, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded-md ${language === 'en' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`px-3 py-1 text-sm rounded-md ${language === 'ta' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}
              >
                தமிழ்
              </button>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <Shield className="h-12 w-12 text-blue-600" />
              <h2 className="ml-3 text-3xl font-extrabold text-gray-900">{t('Kaaval Kani')}</h2>
            </div>
            <h2 className="mt-2 text-center text-sm font-medium text-gray-600">
              {t('Crime Analysis & Prediction System')}
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    {t('Username')}
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {t('Password')}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t('Sign In')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/login_image.jpg"
          alt="Police officers working"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-end p-12">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-2">{t('Tuticorin Police Department')}</h2>
            <p className="text-blue-100 max-w-xl">
              {language === 'en' 
                ? "Advanced crime analysis and prediction system to enhance public safety and optimize police resources."
                : "பொது பாதுகாப்பை மேம்படுத்தவும் காவல்துறை வளங்களை உகந்ததாக்கவும் மேம்பட்ட குற்ற பகுப்பாய்வு மற்றும் முன்கணிப்பு அமைப்பு."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;