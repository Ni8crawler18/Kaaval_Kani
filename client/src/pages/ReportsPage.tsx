import React, { useState } from 'react';
import { FileText, Download, Filter, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ReportsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock report data
  const reports = [
    { id: 1, title: 'Monthly Crime Summary - April 2023', type: 'summary', date: '2023-05-01', author: 'Inspector Rajan' },
    { id: 2, title: 'Theft Analysis - Market Area', type: 'analysis', date: '2023-04-28', author: 'Officer Kumar' },
    { id: 3, title: 'Harbor Zone Security Assessment', type: 'assessment', date: '2023-04-25', author: 'Deputy Commissioner Lakshmi' },
    { id: 4, title: 'Residential Crime Prevention Report', type: 'prevention', date: '2023-04-20', author: 'Officer Anand' },
    { id: 5, title: 'Weekly Patrol Effectiveness', type: 'performance', date: '2023-04-15', author: 'Sergeant Vijay' },
    { id: 6, title: 'Smuggling Incident Investigation', type: 'investigation', date: '2023-04-10', author: 'Inspector Rajan' },
    { id: 7, title: 'Public Safety Survey Results', type: 'survey', date: '2023-04-05', author: 'Officer Kumar' },
    { id: 8, title: 'School Zone Monitoring Report', type: 'monitoring', date: '2023-04-01', author: 'Officer Anand' },
  ];

  // Filter and search reports
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          report.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || report.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{t('Reports')}</h2>
        <p className="mt-1 text-sm text-gray-600">
          {t('Access and download crime analysis reports')}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h3 className="text-lg font-medium text-gray-900">{t('Available Reports')}</h3>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={t('Search reports...')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">{t('All Types')}</option>
                <option value="summary">{t('Summary')}</option>
                <option value="analysis">{t('Analysis')}</option>
                <option value="assessment">{t('Assessment')}</option>
                <option value="prevention">{t('Prevention')}</option>
                <option value="performance">{t('Performance')}</option>
                <option value="investigation">{t('Investigation')}</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('Report Title')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('Type')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('Date')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('Author')}
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('Actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm font-medium text-gray-900">{report.title}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {t(report.type.charAt(0).toUpperCase() + report.type.slice(1))}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full">
                      <Download className="h-4 w-4 mr-1" />
                      {t('Download')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredReports.length === 0 && (
          <div className="py-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">{t('No reports found')}</h3>
            <p className="mt-1 text-sm text-gray-500">{t('Try adjusting your search or filter to find what you\'re looking for.')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;