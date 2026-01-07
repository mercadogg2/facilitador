
import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_CARS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AdminDashboardProps {
  lang: Language;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].admin;
  const tc = TRANSLATIONS[lang].common;

  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'ads' | 'stands'>('overview');
  const [userSearch, setUserSearch] = useState('');
  const [adSearch, setAdSearch] = useState('');

  // Mock de usuários
  const [users, setUsers] = useState([
    { id: 'u1', name: 'João Silva', email: 'joao@email.com', role: 'Cliente', date: '2024-05-10', status: 'Ativo' },
    { id: 'u2', name: 'Maria Santos', email: 'maria@email.com', role: 'Cliente', date: '2024-05-12', status: 'Ativo' },
    { id: 'u3', name: 'Pedro Costa', email: 'pedro@email.com', role: 'Cliente', date: '2024-04-28', status: 'Suspenso' },
    { id: 'u4', name: 'Ana Oliveira', email: 'ana@email.com', role: 'Stand Admin', date: '2024-05-01', status: 'Ativo' },
  ]);

  const [ads, setAds] = useState(MOCK_CARS);

  const [stands, setStands] = useState([
    { id: 's1', name: 'Auto Premium Lisboa', email: 'contato@autopremium.pt', status: 'verified', date: '2024-05-01' },
    { id: 's2', name: 'Algarve Luxury Cars', email: 'sales@algarvelux.pt', status: 'pending', date: '2024-05-15' },
    { id: 's3', name: 'Norte Motors Porto', email: 'info@nortemotors.pt', status: 'verified', date: '2024-04-20' },
    { id: 's4', name: 'Centro Auto Viseu', email: 'geral@centroauto.pt', status: 'pending', date: '2024-05-18' },
  ]);

  const growthData = [
    { name: 'Jan', ads: 120, leads: 400 },
    { name: 'Fev', ads: 150, leads: 520 },
    { name: 'Mar', ads: 180, leads: 610 },
    { name: 'Abr', ads: 240, leads: 800 },
    { name: 'Mai', ads: 320, leads: 1200 },
    { name: 'Jun', ads: 450, leads: 1500 },
  ];

  const toggleStandStatus = (id: string) => {
    setStands(stands.map(s => 
      s.id === id ? { ...s, status: s.status === 'verified' ? 'pending' : 'verified' } : s
    ));
  };

  const deleteUser = (id: string) => {
    if(window.confirm('Tem certeza que deseja remover este usuário?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const deleteAd = (id: string) => {
    if(window.confirm('Tem certeza que deseja remover este anúncio?')) {
      setAds(ads.filter(a => a.id !== id));
    }
  };

  const filteredUsers = useMemo(() => 
    users.filter(u => u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase())),
  [users, userSearch]);

  const filteredAds = useMemo(() => 
    ads.filter(a => a.brand.toLowerCase().includes(adSearch.toLowerCase()) || a.model.toLowerCase().includes(adSearch.toLowerCase())),
  [ads, adSearch]);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
            <p className="text-gray-500">{t.subtitle}</p>
          </div>
          
          <nav className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
            {[
              { id: 'overview', icon: 'fa-chart-pie', label: lang === 'pt' ? 'Visão Geral' : 'Overview' },
              { id: 'users', icon: 'fa-users', label: lang === 'pt' ? 'Usuários' : 'Users' },
              { id: 'ads', icon: 'fa-ad', label: lang === 'pt' ? 'Anúncios' : 'Ads' },
              { id: 'stands', icon: 'fa-store', label: lang === 'pt' ? 'Parceiros' : 'Stands' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <i className={`fas ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {t.stats.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                      ['bg-blue-600', 'bg-indigo-600', 'bg-emerald-600', 'bg-orange-600'][i]
                    }`}>
                      <i className={`fas ${['fa-users', 'fa-store', 'fa-ad', 'fa-paper-plane'][i]}`}></i>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">{s}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {['1,240', '86', '452', '12,4k'][i]}
                  </h3>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8">{t.platformGrowth}</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="leads" stroke="#2563eb" fillOpacity={1} fill="url(#colorAds)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-bold">{lang === 'pt' ? 'Utilizadores Registados' : 'Registered Users'}</h3>
              <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  placeholder={tc.search} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                />
                <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Utilizador</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Data Registro</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs uppercase">
                            {user.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{user.name}</p>
                            <p className="text-xs text-gray-400">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          user.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => deleteUser(user.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ads Tab */}
        {activeTab === 'ads' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-bold">{lang === 'pt' ? 'Gestão de Anúncios' : 'Ads Management'}</h3>
              <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  placeholder={tc.search} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  value={adSearch}
                  onChange={(e) => setAdSearch(e.target.value)}
                />
                <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Veículo</th>
                    <th className="px-6 py-4">Stand</th>
                    <th className="px-6 py-4">Preço</th>
                    <th className="px-6 py-4">Categoria</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAds.map(ad => (
                    <tr key={ad.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img src={ad.image} className="w-12 h-12 rounded-xl object-cover" alt={ad.model} />
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{ad.brand} {ad.model}</p>
                            <p className="text-xs text-gray-400">{ad.year} • {ad.mileage.toLocaleString()} km</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-700">{ad.standName}</p>
                        <p className="text-xs text-gray-400">{ad.location}</p>
                      </td>
                      <td className="px-6 py-4 font-bold text-blue-600 text-sm">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(ad.price)}
                      </td>
                      <td className="px-6 py-4">
                         <span className="text-[10px] font-bold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                           {ad.category}
                         </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end space-x-3">
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button 
                            onClick={() => deleteAd(ad.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Stands Tab */}
        {activeTab === 'stands' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold">{t.standsManagement}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {stands.map(stand => (
                <div key={stand.id} className="p-6 rounded-3xl border border-gray-100 bg-gray-50/30 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600 font-bold">
                      {stand.name[0]}
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      stand.status === 'verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {stand.status === 'verified' ? t.verified : t.pending}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{stand.name}</h4>
                  <p className="text-xs text-gray-400 mb-6">{stand.email}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleStandStatus(stand.id)}
                      className={`flex-grow py-2.5 rounded-xl text-xs font-bold transition-all ${
                        stand.status === 'verified' 
                          ? 'bg-white border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-600' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200'
                      }`}
                    >
                      {stand.status === 'verified' ? t.reject : t.approve}
                    </button>
                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-900">
                      <i className="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
