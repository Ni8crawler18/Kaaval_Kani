import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  BarChart3, 
  FileText, 
  AlertTriangle, 
  Settings, 
  HelpCircle,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { t } = useLanguage();
  
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Crime Map', icon: <Map size={20} />, path: '/map' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
    { name: 'Reports', icon: <FileText size={20} />, path: '/reports' },
    { name: 'Alerts', icon: <AlertTriangle size={20} />, path: '/alerts' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    { name: 'Help', icon: <HelpCircle size={20} />, path: '/help' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:z-0`}
      >
        <div className="flex items-center justify-center h-16 border-b border-blue-700">
          <Shield className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold">{t('Kaaval Kani')}</span>
        </div>

        <div className="px-4 py-3 text-xs font-semibold text-blue-200 uppercase tracking-wider">
          {t('Tuticorin Police Department')}
        </div>

        <nav className="mt-2 px-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors
                  ${isActive
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }
                `}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {t(item.name)}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full">
          <div className="px-4 py-4 border-t border-blue-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full border-2 border-blue-400"
                  src="public/user_logo.jpeg"
                  alt="User avatar"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Officer Kumar</p>
                <p className="text-xs font-medium text-blue-300">{t('Tuticorin Police Department')}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;