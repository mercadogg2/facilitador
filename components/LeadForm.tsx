
import React, { useState } from 'react';
import { Car, Language } from '../types';

interface LeadFormProps {
  car: Car;
  lang: Language;
  onClose: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ car, lang, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: lang === 'pt' 
      ? `Olá! Estou interessado no ${car.brand} ${car.model} (${car.year}). Poderia me dar mais informações?`
      : `Hi! I'm interested in the ${car.brand} ${car.model} (${car.year}). Could you provide more information?`
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(`${formData.message}\n\nDe: ${formData.name}\nTel: ${formData.phone}`);
    // Simulate WhatsApp Redirect
    window.open(`https://wa.me/351912345678?text=${whatsappMsg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative h-32 bg-blue-600 p-8 flex flex-col justify-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <h2 className="text-2xl font-bold text-white">Contactar Stand</h2>
          <p className="text-blue-100 text-sm">Interesse em: {car.brand} {car.model}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
            <input 
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ex: João Silva"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="email@exemplo.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Telemóvel</label>
              <input 
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+351 900 000 000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mensagem</label>
            <textarea 
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-100 flex items-center justify-center space-x-2"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            <span>Enviar Mensagem via WhatsApp</span>
          </button>
          <p className="text-[10px] text-gray-400 text-center">
            Ao clicar em enviar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
