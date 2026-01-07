
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, Car } from '../types';
import { MOCK_CARS, TRANSLATIONS } from '../constants';
import CarCard from '../components/CarCard';

interface UserAreaProps {
  lang: Language;
  favorites: string[];
}

const UserArea: React.FC<UserAreaProps> = ({ lang, favorites }) => {
  const t = TRANSLATIONS[lang].userArea;
  const navigate = useNavigate();
  const favoriteCars = MOCK_CARS.filter(c => favorites.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">U</div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t.greeting}</h1>
          <p className="text-gray-500">{t.memberSince} {lang === 'pt' ? 'Outubro 2024' : 'October 2024'} • 0 {t.contactsDone}</p>
        </div>
        <div className="md:ml-auto flex gap-4">
          <button 
            onClick={() => navigate('/cliente/editar')}
            className="px-6 py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-all text-sm"
          >
            {t.editProfile}
          </button>
          <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all text-sm">
            {t.logout}
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <i className="fas fa-heart text-red-500 mr-3"></i>
          {t.myFavorites} ({favoriteCars.length})
        </h2>
        
        {favoriteCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favoriteCars.map(car => (
              <CarCard 
                key={car.id} car={car} lang={lang} 
                onToggleFavorite={() => {}} isFavorite={true} onSelect={() => {}} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.emptyTitle}</h3>
            <p className="text-gray-500">{t.emptyDesc}</p>
            <a href="#/veiculos" className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
              {t.explore}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserArea;
