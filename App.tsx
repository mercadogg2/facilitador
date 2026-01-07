
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { UserRole, Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import About from './pages/About';
import Blog from './pages/Blog';
import Article from './pages/Article';
import CarDetail from './pages/CarDetail';
import StandDashboard from './pages/StandDashboard';
import CreateAd from './pages/CreateAd';
import UserArea from './pages/UserArea';
import EditProfile from './pages/EditProfile';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [role, setRole] = useState<UserRole>(UserRole.VISITOR);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleLanguage = () => setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  const toggleRole = () => setRole(prev => {
    if (prev === UserRole.VISITOR) return UserRole.STAND;
    if (prev === UserRole.STAND) return UserRole.ADMIN;
    return UserRole.VISITOR;
  });

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          lang={language} 
          role={role} 
          onToggleLang={toggleLanguage} 
          onToggleRole={toggleRole} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={language} onToggleFavorite={handleToggleFavorite} favorites={favorites} />} />
            <Route path="/veiculos" element={<Listings lang={language} onToggleFavorite={handleToggleFavorite} favorites={favorites} />} />
            <Route path="/veiculos/:id" element={<CarDetail lang={language} onToggleFavorite={handleToggleFavorite} favorites={favorites} />} />
            <Route path="/sobre" element={<About lang={language} />} />
            <Route path="/blog" element={<Blog lang={language} />} />
            <Route path="/blog/:id" element={<Article lang={language} />} />
            <Route path="/dashboard" element={<StandDashboard lang={language} />} />
            <Route path="/anunciar" element={<CreateAd lang={language} />} />
            <Route path="/admin" element={<AdminDashboard lang={language} />} />
            <Route path="/cliente" element={<UserArea lang={language} favorites={favorites} />} />
            <Route path="/cliente/editar" element={<EditProfile lang={language} />} />
          </Routes>
        </main>

        <Footer lang={language} />
      </div>
    </HashRouter>
  );
};

export default App;
