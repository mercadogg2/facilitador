
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language } from '../types';
import { MOCK_BLOG, TRANSLATIONS } from '../constants';

interface ArticleProps {
  lang: Language;
}

const Article: React.FC<ArticleProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const t = TRANSLATIONS[lang].blog;
  const tc = TRANSLATIONS[lang].common;

  const article = useMemo(() => MOCK_BLOG.find(a => a.id === id), [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Artigo não encontrado</h2>
          <Link to="/blog" className="text-blue-600 font-bold">{tc.back} ao Blog</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = MOCK_BLOG.filter(a => a.id !== id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
          <div className="max-w-4xl mx-auto px-4 w-full pb-16">
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors flex items-center mb-6 text-sm font-bold group">
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
              {tc.back}
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-white/90 gap-6 text-sm">
              <span className="flex items-center">
                <i className="far fa-user mr-2 text-blue-400"></i>
                {article.author}
              </span>
              <span className="flex items-center">
                <i className="far fa-calendar mr-2 text-blue-400"></i>
                {new Date(article.date).toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-US')}
              </span>
              <span className="flex items-center">
                <i className="far fa-clock mr-2 text-blue-400"></i>
                {article.readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Body */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Social Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <span className="font-bold text-gray-900">{tc.share}:</span>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">{lang === 'pt' ? 'Sobre o Autor' : 'About the Author'}</h4>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {article.author[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{article.author}</p>
                  <p className="text-xs text-gray-500">{lang === 'pt' ? 'Especialista Facilitador' : 'Facilitator Expert'}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lang === 'pt' 
                  ? 'Dedicado a trazer transparência e segurança para cada transação no Facilitador Car.' 
                  : 'Dedicated to bringing transparency and security to every transaction at Facilitador Car.'}
              </p>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-4">{lang === 'pt' ? 'Procura um carro?' : 'Looking for a car?'}</h4>
                <p className="text-blue-100 text-sm mb-6">Explore o nosso stock verificado e compre com tranquilidade.</p>
                <Link 
                  to="/veiculos" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm block text-center hover:bg-blue-50 transition-colors"
                >
                  Ver Stock
                </Link>
              </div>
              <i className="fas fa-car absolute bottom-[-20px] right-[-20px] text-white/10 text-8xl -rotate-12"></i>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">{t.related}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group flex gap-6 items-center">
                <div className="w-32 h-24 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(post.date).toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-US')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
