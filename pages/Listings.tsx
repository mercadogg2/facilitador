
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Language, Car } from '../types';
import { MOCK_CARS, TRANSLATIONS } from '../constants';
import CarCard from '../components/CarCard';
import LeadForm from '../components/LeadForm';

interface ListingsProps {
  lang: Language;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

const Listings: React.FC<ListingsProps> = ({ lang, onToggleFavorite, favorites }) => {
  const t = TRANSLATIONS[lang].common;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    fuel: '',
    maxPrice: 500000
  });

  // Atualizar busca quando o parâmetro da URL mudar
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter(car => {
      const matchesSearch = searchQuery === '' || 
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = filters.brand === '' || car.brand.toLowerCase() === filters.brand.toLowerCase();
      const matchesCategory = filters.category === '' || car.category === filters.category;
      const matchesFuel = filters.fuel === '' || car.fuel === filters.fuel;
      const matchesPrice = car.price <= filters.maxPrice;

      return matchesSearch && matchesBrand && matchesCategory && matchesFuel && matchesPrice;
    });
  }, [filters, searchQuery]);

  const brands = Array.from(new Set(MOCK_CARS.map(c => c.brand)));
  const categories = Array.from(new Set(MOCK_CARS.map(c => c.category)));

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    // Debounce na atualização da URL (opcional)
    if (val === '') {
      searchParams.delete('q');
    } else {
      searchParams.set('q', val);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-72 space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <i className="fas fa-sliders-h mr-2 text-blue-600"></i>
              {t.filters}
            </h3>

            <div className="space-y-6">
              {/* Pesquisa Livre Dinâmica */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.search}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={lang === 'pt' ? 'Marca, modelo...' : 'Make, model...'}
                    className="w-full p-3 pl-10 rounded-xl bg-gray-50 border-none text-sm outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                  <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.brand}</label>
                <select 
                  className="w-full p-3 rounded-xl bg-gray-50 border-none text-sm outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                >
                  <option value="">{lang === 'pt' ? 'Todas as Marcas' : 'All Brands'}</option>
                  {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.category}</label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      checked={filters.category === ''}
                      onChange={() => setFilters({...filters, category: ''})}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      {lang === 'pt' ? 'Todos' : 'All'}
                    </span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        checked={filters.category === cat}
                        onChange={() => setFilters({...filters, category: cat})}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.maxPrice}</label>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: parseInt(e.target.value)})}
                />
                <div className="flex justify-between mt-2 font-bold text-blue-600 text-xs">
                  <span>5k €</span>
                  <span>{filters.maxPrice.toLocaleString()} €</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  setFilters({ brand: '', category: '', fuel: '', maxPrice: 500000 });
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="w-full py-3 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors border-t border-gray-100 pt-4"
              >
                {t.clearFilters}
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100 gap-4">
            <h2 className="text-xl font-bold text-gray-900">
              {filteredCars.length} {t.found}
              {searchQuery && (
                <span className="ml-2 text-blue-600 text-sm font-medium">
                  para "{searchQuery}"
                </span>
              )}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400 font-bold uppercase">{t.sortBy}:</span>
              <select className="bg-transparent border-none text-sm font-bold text-gray-700 focus:ring-0 outline-none cursor-pointer">
                <option>{t.recent}</option>
                <option>{lang === 'pt' ? 'Menor Preço' : 'Lowest Price'}</option>
                <option>{lang === 'pt' ? 'Maior Preço' : 'Highest Price'}</option>
              </select>
            </div>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  lang={lang} 
                  onToggleFavorite={onToggleFavorite} 
                  isFavorite={favorites.includes(car.id)}
                  onSelect={setSelectedCar}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[40px] shadow-sm border border-gray-100 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-gray-50 text-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                <i className="fas fa-search-minus"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.noResults}</h3>
              <p className="text-gray-500 max-w-xs mx-auto">Tente ajustar seus filtros ou termos de pesquisa para encontrar o que procura.</p>
            </div>
          )}
        </div>
      </div>

      {selectedCar && <LeadForm car={selectedCar} lang={lang} onClose={() => setSelectedCar(null)} />}
    </div>
  );
};

export default Listings;
