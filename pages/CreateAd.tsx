
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CreateAdProps {
  lang: Language;
}

const CreateAd: React.FC<CreateAdProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].createAd;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    category: 'Sedan',
    mileage: 0,
    fuel: 'Gasolina',
    transmission: 'Automático',
    price: '',
    location: '',
    description: '',
    image: '',
    subdomain: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basic slug validation for subdomain
    if (name === 'subdomain') {
      const slugified = value.toLowerCase().replace(/[^a-z0-9-]/g, '-');
      setFormData(prev => ({ ...prev, [name]: slugified }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando chamada à API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md w-full animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
            <i className="fas fa-check"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.success}</h2>
          <p className="text-gray-500">Redirecionando para o seu dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-500">{t.subtitle}</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informação Básica */}
          <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-4">1</span>
              {t.basicInfo}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.brand}</label>
                <input required name="brand" value={formData.brand} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Ex: BMW" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.model}</label>
                <input required name="model" value={formData.model} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Ex: M340i" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.year}</label>
                <input required type="number" name="year" value={formData.year} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.category}</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Coupe</option>
                  <option>Hatchback</option>
                  <option>Utilitário</option>
                </select>
              </div>
            </div>
          </section>

          {/* Detalhes Técnicos */}
          <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-4">2</span>
              {t.technicalSpecs}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.mileage}</label>
                <input required type="number" name="mileage" value={formData.mileage} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.fuel}</label>
                <select name="fuel" value={formData.fuel} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Gasolina</option>
                  <option>Diesel</option>
                  <option>Elétrico</option>
                  <option>Híbrido</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.transmission}</label>
                <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Automático</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>
          </section>

          {/* Comercial e Fotos */}
          <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-4">3</span>
              {t.commercial}
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.price}</label>
                  <input required type="number" name="price" value={formData.price} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-blue-600" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.location}</label>
                  <input required name="location" value={formData.location} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Lisboa, Porto..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.fields.description}</label>
                <textarea rows={4} name="description" value={formData.description} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Conte mais sobre o carro..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.upload}</label>
                <div className="flex gap-4">
                  <input required name="image" value={formData.image} onChange={handleChange} className="flex-grow px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="https://exemplo.com/carro.jpg" />
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 overflow-hidden">
                    {formData.image ? <img src={formData.image} alt="Preview" className="w-full h-full object-cover" /> : <i className="fas fa-image"></i>}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing e Subdomínio */}
          <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-black uppercase px-3 py-1 rounded-full">Premium</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-4">4</span>
              {t.marketing}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.subdomainTitle}</label>
                <p className="text-xs text-gray-500 mb-4">{t.subdomainDesc}</p>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-grow w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                      facilitadorcar.pt/
                    </div>
                    <input 
                      name="subdomain" 
                      value={formData.subdomain} 
                      onChange={handleChange} 
                      className="w-full pl-[110px] pr-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-blue-600" 
                      placeholder={t.subdomainPlaceholder} 
                    />
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl border border-emerald-100 flex items-center space-x-3 w-full md:w-auto">
                    <i className="fas fa-link"></i>
                    <span className="text-xs font-bold">Link pronto a partilhar</span>
                  </div>
                </div>
                {formData.subdomain && (
                  <p className="mt-4 text-xs text-gray-400">
                    O seu anúncio estará disponível em: <span className="text-blue-600 font-bold underline">facilitadorcar.pt/{formData.subdomain}</span>
                  </p>
                )}
              </div>
            </div>
          </section>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-6 rounded-[30px] font-black text-xl transition-all shadow-xl flex items-center justify-center space-x-4 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'}`}
          >
            {isSubmitting ? <i className="fas fa-circle-notch animate-spin"></i> : <i className="fas fa-rocket"></i>}
            <span>{t.publish}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
