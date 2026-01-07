
import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, Car } from '../types';
import { MOCK_CARS, TRANSLATIONS } from '../constants';
import LeadForm from '../components/LeadForm';
import CarCard from '../components/CarCard';

interface CarDetailProps {
  lang: Language;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

const CarDetail: React.FC<CarDetailProps> = ({ lang, onToggleFavorite, favorites }) => {
  const { id } = useParams<{ id: string }>();
  const [showLeadForm, setShowLeadForm] = useState(false);
  
  const car = useMemo(() => MOCK_CARS.find(c => c.id === id), [id]);
  const t = TRANSLATIONS[lang].detail;
  const tc = TRANSLATIONS[lang].common;

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'pt' ? 'Veículo não encontrado' : 'Vehicle not found'}</h2>
          <Link to="/veiculos" className="text-blue-600 font-bold hover:underline">{tc.back} à Pesquisa</Link>
        </div>
      </div>
    );
  }

  const relatedCars = MOCK_CARS.filter(c => c.id !== car.id && c.category === car.category).slice(0, 3);
  const isFavorite = favorites.includes(car.id);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <i className="fas fa-chevron-right mx-3 text-[10px]"></i>
          <Link to="/veiculos" className="hover:text-blue-600 transition-colors">{tc.found}</Link>
          <i className="fas fa-chevron-right mx-3 text-[10px]"></i>
          <span className="text-gray-900 font-medium">{car.brand} {car.model}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content: Images and Specs */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.model}`}
                className="w-full h-auto aspect-[16/10] object-cover"
              />
              <button 
                onClick={() => onToggleFavorite(car.id)}
                className={`absolute top-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'}`}
              >
                <i className={`${isFavorite ? 'fas' : 'far'} fa-heart text-xl`}></i>
              </button>
            </div>

            {/* Header info for Mobile */}
            <div className="lg:hidden space-y-4">
              <h1 className="text-3xl font-extrabold text-gray-900">{car.brand} {car.model}</h1>
              <div className="text-3xl font-bold text-blue-600">
                {new Intl.NumberFormat(lang === 'pt' ? 'pt-PT' : 'en-US', { style: 'currency', currency: 'EUR' }).format(car.price)}
              </div>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: tc.year, value: car.year, icon: 'fa-calendar' },
                { label: tc.km, value: `${car.mileage.toLocaleString()} km`, icon: 'fa-road' },
                { label: tc.fuel, value: car.fuel, icon: 'fa-gas-pump' },
                { label: lang === 'pt' ? 'Transmissão' : 'Transmission', value: car.transmission, icon: 'fa-cog' }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                  <i className={`fas ${stat.icon} text-blue-600 mb-3 text-lg`}></i>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{t.description}</h3>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {car.description}
              </p>
            </section>

            {/* Detailed Characteristics */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{t.characteristics}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex justify-between border-b border-gray-200 pb-2 md:mr-8">
                  <span className="text-gray-500">{lang === 'pt' ? 'Marca' : 'Make'}</span>
                  <span className="font-bold">{car.brand}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">{lang === 'pt' ? 'Modelo' : 'Model'}</span>
                  <span className="font-bold">{car.model}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2 md:mr-8">
                  <span className="text-gray-500">{lang === 'pt' ? 'Categoria' : 'Category'}</span>
                  <span className="font-bold">{car.category}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">{lang === 'pt' ? 'Cor' : 'Color'}</span>
                  <span className="font-bold">{lang === 'pt' ? 'Não especificado' : 'Not specified'}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: Dealer & Actions */}
          <aside className="space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* Main Title & Price (Desktop only) */}
              <div className="hidden lg:block space-y-2">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{car.brand} {car.model}</h1>
                <div className="text-4xl font-black text-blue-600">
                  {new Intl.NumberFormat(lang === 'pt' ? 'pt-PT' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(car.price)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => setShowLeadForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-200 flex items-center justify-center text-lg"
                >
                  <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                  {tc.contact}
                </button>
                <a 
                  href="tel:+351912345678"
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center text-lg"
                >
                  <i className="fas fa-phone-alt mr-3"></i>
                  {t.callButton}
                </a>
              </div>

              {/* Dealer Box */}
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-gray-900">{t.dealerInfo}</h4>
                  {car.verified && (
                    <span className="bg-blue-100 text-blue-700 text-[10px] font-black uppercase px-2 py-1 rounded">Verified</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl font-bold">
                    {car.standName[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">{car.standName}</p>
                    <p className="text-sm text-gray-400 flex items-center">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {car.location}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                  <p className="text-xs text-blue-800 leading-relaxed font-medium">
                    {t.verifiedReason}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Vehicles */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-bold text-gray-900">{t.relatedTitle}</h3>
            <Link to="/veiculos" className="text-blue-600 font-bold hover:underline">{tc.search} {lang === 'pt' ? 'mais' : 'more'}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCars.map(c => (
              <CarCard 
                key={c.id} 
                car={c} 
                lang={lang} 
                onToggleFavorite={onToggleFavorite} 
                isFavorite={favorites.includes(c.id)} 
                onSelect={() => {}} 
              />
            ))}
          </div>
        </section>
      </div>

      {showLeadForm && (
        <LeadForm 
          car={car} 
          lang={lang} 
          onClose={() => setShowLeadForm(false)} 
        />
      )}
    </div>
  );
};

export default CarDetail;
