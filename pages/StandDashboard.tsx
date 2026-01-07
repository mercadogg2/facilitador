
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  lang: Language;
}

const StandDashboard: React.FC<DashboardProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].dashboard;
  const navigate = useNavigate();

  const statsData = [
    { name: lang === 'pt' ? 'Seg' : 'Mon', leads: 4, views: 120 },
    { name: lang === 'pt' ? 'Ter' : 'Tue', leads: 7, views: 250 },
    { name: lang === 'pt' ? 'Qua' : 'Wed', leads: 5, views: 180 },
    { name: lang === 'pt' ? 'Qui' : 'Thu', leads: 12, views: 400 },
    { name: lang === 'pt' ? 'Sex' : 'Fri', leads: 9, views: 320 },
    { name: lang === 'pt' ? 'Sáb' : 'Sat', leads: 15, views: 520 },
    { name: lang === 'pt' ? 'Dom' : 'Sun', leads: 10, views: 450 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
            <p className="text-gray-500">Auto Premium Lisboa - {t.subtitle}</p>
          </div>
          <button 
            onClick={() => navigate('/anunciar')}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            <i className="fas fa-plus mr-2"></i>
            {t.newAd}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {t.stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm font-medium">{s}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {['62', '2.4k', '18', '14min'][i]}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8">{t.weeklyPerformance}</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: '#f8faff'}} />
                  <Bar dataKey="leads" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">{t.recentLeads}</h3>
              <button className="text-blue-600 text-sm font-bold hover:underline">{t.viewAll}</button>
            </div>
            <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
              {t.manageLeads}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandDashboard;
