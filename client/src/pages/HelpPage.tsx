import React from 'react';
import { HelpCircle, Book, Video, MessageSquare, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HelpPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{t('Help & Support')}</h2>
        <p className="mt-1 text-sm text-gray-600">
          {t('Learn how to use the Kaaval Kani system effectively')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <Book className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('User Guide')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('Comprehensive documentation on how to use all features of the system')}
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              {t('Read Documentation')} →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('Video Tutorials')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('Watch step-by-step video guides on using the system')}
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              {t('View Tutorials')} →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('Contact Support')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('Get help from our technical support team')}
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 text-sm font-medium">
              {t('Contact Us')} →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">{t('Frequently Asked Questions')}</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                {language === 'en' 
                  ? "How do I interpret the crime heatmap?"
                  : "குற்ற வெப்ப வரைபடத்தை எவ்வாறு விளக்குவது?"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? "The crime heatmap uses color-coded areas to indicate crime concentration. Red areas indicate high crime activity, orange indicates medium activity, and yellow indicates lower activity. You can hover over specific areas to see more details."
                  : "குற்ற வெப்ப வரைபடம் குற்ற செறிவைக் குறிக்க வண்ண-குறியிடப்பட்ட பகுதிகளைப் பயன்படுத்துகிறது. சிவப்பு பகுதிகள் அதிக குற்ற நடவடிக்கையைக் குறிக்கின்றன, ஆரஞ்சு நடுத்தர செயல்பாட்டைக் குறிக்கிறது, மற்றும் மஞ்சள் குறைந்த செயல்பாட்டைக் குறிக்கிறது. மேலும் விவரங்களைக் காண குறிப்பிட்ட பகுதிகளில் நீங்கள் நகர்த்தலாம்."}
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                {language === 'en' 
                  ? "How accurate are the crime predictions?"
                  : "குற்ற முன்கணிப்புகள் எவ்வளவு துல்லியமானவை?"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? "Our crime predictions are based on historical data, patterns, and machine learning algorithms. They typically have an accuracy rate of 70-85% depending on the crime type and available data. The system continuously improves as more data is collected."
                  : "எங்கள் குற்ற முன்கணிப்புகள் வரலாற்று தரவு, முறைகள் மற்றும் இயந்திர கற்றல் அல்காரிதம்களை அடிப்படையாகக் கொண்டவை. அவை பொதுவாக குற்ற வகை மற்றும் கிடைக்கக்கூடிய தரவைப் பொறுத்து 70-85% துல்லியத்தன்மையைக் கொண்டுள்ளன. கூடுதல் தரவு சேகரிக்கப்படும்போது அமைப்பு தொடர்ந்து மேம்படுகிறது."}
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                {language === 'en' 
                  ? "How do I export reports for presentations?"
                  : "விளக்கக்காட்சிகளுக்கான அறிக்கைகளை எவ்வாறு ஏற்றுமதி செய்வது?"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? "To export reports, navigate to the Reports section, select the report you want to export, and click the Download button. Reports can be exported in PDF, Excel, or CSV formats depending on the report type."
                  : "அறிக்கைகளை ஏற்றுமதி செய்ய, அறிக்கைகள் பிரிவுக்குச் சென்று, நீங்கள் ஏற்றுமதி செய்ய விரும்பும் அறிக்கையைத் தேர்ந்தெடுத்து, பதிவிறக்க பொத்தானைக் கிளிக் செய்யவும். அறிக்கை வகையைப் பொறுத்து அறிக்கைகளை PDF, Excel அல்லது CSV வடிவங்களில் ஏற்றுமதி செய்யலாம்."}
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                {language === 'en' 
                  ? "Can I customize alert notifications?"
                  : "எச்சரிக்கை அறிவிப்புகளை நான் தனிப்பயனாக்க முடியுமா?"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? "Yes, you can customize alert notifications in the Settings section. You can choose to receive notifications for specific crime types, set priority levels, enable or disable sound alerts, and configure notification methods."
                  : "ஆம், அமைப்புகள் பிரிவில் எச்சரிக்கை அறிவிப்புகளை நீங்கள் தனிப்பயனாக்கலாம். குறிப்பிட்ட குற்ற வகைகளுக்கான அறிவிப்புகளைப் பெற, முன்னுரிமை நிலைகளை அமைக்க, ஒலி எச்சரிக்கைகளை இயக்க அல்லது முடக்க, மற்றும் அறிவிப்பு முறைகளை உள்ளமைக்க நீங்கள் தேர்வு செய்யலாம்."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-blue-800">{t('Need Additional Help?')}</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                {language === 'en' 
                  ? "If you need further assistance, please contact our technical support team at support@kaaval-kani.gov.in or call our helpdesk at +91-461-2345678."
                  : "உங்களுக்கு மேலும் உதவி தேவைப்பட்டால், தயவுசெய்து எங்கள் தொழில்நுட்ப ஆதரவு குழுவை support@kaaval-kani.gov.in இல் தொடர்பு கொள்ளவும் அல்லது எங்கள் உதவி மையத்தை +91-461-2345678 இல் அழைக்கவும்."}
              </p>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FileText className="h-4 w-4 mr-2" />
                {t('Download User Manual')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;