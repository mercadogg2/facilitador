
import { Car, BlogPost } from './types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: '320i M Sport',
    year: 2024,
    price: 320000,
    mileage: 0,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    description: 'Sedã de luxo com performance esportiva e tecnologia de ponta. Inclui Pack M Sport, teto de abrir panorâmico e sistema de som Harman Kardon.',
    standName: 'Auto Premium Lisboa',
    verified: true,
    location: 'Lisboa',
    category: 'Sedan',
    subdomain: 'bmw-320i-lisboa'
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'Q5 TFSIe',
    year: 2023,
    price: 285000,
    mileage: 5000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    description: 'SUV versátil com sistema híbrido plug-in eficiente. Ideal para famílias que procuram conforto e tecnologia aliada a baixos consumos.',
    standName: 'Viseu Motors',
    verified: true,
    location: 'Viseu',
    category: 'SUV'
  },
  {
    id: '3',
    brand: 'Mercedes-Benz',
    model: 'A200 d AMG Line',
    year: 2024,
    price: 45000,
    mileage: 0,
    fuel: 'Diesel',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    description: 'O compacto premium de referência com pack AMG. Equipado com as mais recentes tecnologias de assistência à condução e interior luxuoso.',
    standName: 'Estrela da Manhã Porto',
    verified: true,
    location: 'Porto',
    category: 'Hatchback'
  },
  {
    id: '4',
    brand: 'Tesla',
    model: 'Model Y Long Range',
    year: 2023,
    price: 52000,
    mileage: 12000,
    fuel: 'Elétrico',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800',
    description: 'Performance elétrica e autonomia líder de mercado. Espaço generoso e carregamento super-rápido em toda a rede Tesla.',
    standName: 'Green Drive Portugal',
    verified: true,
    location: 'Lisboa',
    category: 'SUV'
  },
  {
    id: '5',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2022,
    price: 165000,
    mileage: 15000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    description: 'O ícone dos carros esportivos em estado impecável. Histórico completo na marca e configuração única com extras exclusivos.',
    standName: 'Sport Auto Algarve',
    verified: true,
    location: 'Faro',
    category: 'Coupe'
  },
  {
    id: '6',
    brand: 'Volkswagen',
    model: 'Golf GTE',
    year: 2023,
    price: 38500,
    mileage: 15000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    description: 'O híbrido plug-in que combina economia e performance esportiva clássica da linha Golf.',
    standName: 'Coimbra Automóveis',
    verified: true,
    location: 'Coimbra',
    category: 'Hatchback'
  },
  {
    id: '7',
    brand: 'Volvo',
    model: 'XC90 Recharge',
    year: 2024,
    price: 92000,
    mileage: 0,
    fuel: 'Híbrido',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    description: 'Segurança sueca de classe mundial num SUV de 7 lugares luxuoso e eficiente.',
    standName: 'Nordic Cars Braga',
    verified: true,
    location: 'Braga',
    category: 'SUV'
  },
  {
    id: '8',
    brand: 'Ferrari',
    model: 'Roma',
    year: 2023,
    price: 245000,
    mileage: 2500,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
    description: 'Elegância italiana e motor V8 turbo para uma experiência de condução inigualável.',
    standName: 'Luxury Motors Sintra',
    verified: true,
    location: 'Sintra',
    category: 'Coupe'
  },
  {
    id: '9',
    brand: 'Lamborghini',
    model: 'Urus S',
    year: 2024,
    price: 320000,
    mileage: 0,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1544636331-e268592033c2?auto=format&fit=crop&q=80&w=800',
    description: 'O super SUV definitivo. Performance de supercarro com versatilidade para o dia a dia.',
    standName: 'Sport Auto Algarve',
    verified: true,
    location: 'Faro',
    category: 'SUV'
  },
  {
    id: '10',
    brand: 'Toyota',
    model: 'GR Yaris',
    year: 2023,
    price: 42000,
    mileage: 8000,
    fuel: 'Gasolina',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1630141662584-9118c72808c1?auto=format&fit=crop&q=80&w=800',
    description: 'Inspirado no WRC, este é o hot hatch mais desejado da década. Tração integral e performance pura.',
    standName: 'Viseu Motors',
    verified: true,
    location: 'Viseu',
    category: 'Hatchback'
  },
  {
    id: '11',
    brand: 'Ford',
    model: 'Mustang Mach-E GT',
    year: 2024,
    price: 75000,
    mileage: 0,
    fuel: 'Elétrico',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800',
    description: 'O ícone americano reinventado para a era elétrica. Aceleração brutal e estilo inconfundível.',
    standName: 'American Drive Lisboa',
    verified: false,
    location: 'Lisboa',
    category: 'SUV'
  },
  {
    id: '12',
    brand: 'Peugeot',
    model: '3008 GT Hybrid',
    year: 2023,
    price: 44500,
    mileage: 12000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    description: 'Design sofisticado e i-Cockpit premiado. O SUV compacto líder em tecnologia.',
    standName: 'Leiria Automóveis',
    verified: true,
    location: 'Leiria',
    category: 'SUV'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: 'b1',
    title: 'Como comprar carro usado com segurança em 2026',
    excerpt: 'Dicas essenciais para evitar fraudes e garantir o melhor negócio no mercado de usados.',
    content: `Comprar um carro usado pode ser uma experiência gratificante ou um pesadelo financeiro. Em 2026, com a digitalização do mercado, as fraudes tornaram-se mais sofisticadas, mas as ferramentas de proteção também evoluíram.

Primeiro, exija sempre o histórico de manutenção. Stands verificados pelo Facilitador Car já fornecem este documento de forma proativa. Verifique se as revisões foram feitas em concessionários oficiais ou oficinas certificadas.

Segundo, o Test Drive é inegociável. Sinta a suspensão, ouça o motor a frio e teste todos os sistemas eletrônicos. No Facilitador Car, incentivamos os nossos parceiros a permitir inspeções independentes antes da conclusão da venda.

Terceiro, atenção à documentação. Verifique se não existem ónus ou encargos sobre o veículo. O nosso sistema de verificação de stands garante que todos os veículos listados possuem documentação legal regularizada.`,
    author: 'Facilitador Car Team',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
    readingTime: '5 min'
  },
  {
    id: 'b2',
    title: 'Os melhores stands de Lisboa e Porto',
    excerpt: 'Uma lista curada de parceiros Facilitador Car que oferecem as melhores garantias.',
    content: `A escolha do local onde compra o seu carro é tão importante quanto o modelo escolhido. Lisboa e Porto concentram a maior oferta, mas nem todos os stands operam com o mesmo nível de transparência.

Nesta lista curada, destacamos o Auto Premium Lisboa pelo seu atendimento pós-venda exemplar e a Estrela da Manhã Porto pela qualidade imbatível do seu stock de luxo. Ambos passaram por um rigoroso processo de auditoria de 3 meses antes de receberem o selo de Verificação Facilitador Car.

Critérios avaliados:
1. Tempo de mercado (mínimo 5 anos).
2. Índice de satisfação do cliente superior a 90%.
3. Transparência na comunicação de sinistros anteriores.
4. Qualidade da garantia oferecida.

Comprar nestes parceiros significa ter a tranquilidade de que o seu investimento está protegido por profissionais que valorizam a reputação acima de tudo.`,
    author: 'Marketing Dept.',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    readingTime: '4 min'
  }
];

export const TRANSLATIONS = {
  pt: {
    nav: { home: 'Início', vehicles: 'Veículos', about: 'Sobre', blog: 'Blog', dashboard: 'Stand', client: 'Cliente', admin: 'Admin' },
    home: {
      hero: 'O Facilitador Car simplifica a sua compra.',
      subHero: 'Compre com segurança em stands verificados e com o apoio de quem entende.',
      searchPlaceholder: 'Marca, modelo ou ano...',
      featured: 'Veículos em Destaque',
      viewAll: 'Ver Todos',
      whyUs: 'Porquê nós?',
      credibility: 'Credibilidade que faz a diferença na sua escolha.',
      whyUsDesc: 'No Facilitador Car, não somos apenas mais um marketplace. Filtramos rigorosamente os nossos parceiros para garantir que cada negócio seja transparente e seguro.',
      benefits: [
        { title: 'Certificação de Stands', desc: 'Apenas lojistas com histórico impecável.' },
        { title: 'Apoio de Influenciadores', desc: 'Parceiros que testam e aprovam os veículos.' },
        { title: 'Negociação Transparente', desc: 'Canal direto via WhatsApp para agilidade.' }
      ]
    },
    common: {
      price: 'Preço',
      year: 'Ano',
      km: 'Km',
      fuel: 'Combustível',
      contact: 'Contactar Stand',
      verified: 'Stand Verificado',
      leads: 'Gestão de Leads',
      search: 'Pesquisar',
      filters: 'Filtros',
      brand: 'Marca',
      category: 'Tipo de Veículo',
      maxPrice: 'Preço Máximo',
      clearFilters: 'Limpar Filtros',
      noResults: 'Nenhum veículo encontrado',
      found: 'Veículos encontrados',
      sortBy: 'Ordenar por',
      recent: 'Mais recentes',
      back: 'Voltar',
      share: 'Partilhar'
    },
    detail: {
      characteristics: 'Características',
      description: 'Descrição do Veículo',
      dealerInfo: 'Informações do Stand',
      contactTitle: 'Fale com o Stand Agora',
      callButton: 'Ligar para o Stand',
      location: 'Localização',
      relatedTitle: 'Veículos Relacionados',
      verifiedReason: 'Este stand passou por 12 pontos de verificação rigorosa do Facilitador Car, garantindo histórico limpo e atendimento de qualidade.'
    },
    createAd: {
      title: 'Criar Novo Anúncio',
      subtitle: 'Preencha os dados do veículo para começar a receber leads qualificados.',
      basicInfo: 'Informação Básica',
      technicalSpecs: 'Detalhes Técnicos',
      commercial: 'Comercial e Fotos',
      marketing: 'Marketing e Link Personalizado',
      publish: 'Publicar Anúncio',
      success: 'Anúncio publicado com sucesso!',
      error: 'Erro ao publicar. Verifique os campos.',
      upload: 'Upload de Foto (URL)',
      subdomainTitle: 'Subdomínio do Anúncio',
      subdomainDesc: 'Crie uma landing page exclusiva para este veículo.',
      subdomainPlaceholder: 'ex: toyota-yaris-sport',
      fields: {
        brand: 'Marca',
        model: 'Modelo',
        year: 'Ano',
        category: 'Categoria',
        mileage: 'Quilometragem',
        fuel: 'Combustível',
        transmission: 'Transmissão',
        price: 'Preço (€)',
        location: 'Localização (Cidade)',
        description: 'Descrição Detalhada'
      }
    },
    editProfile: {
      title: 'Editar Perfil',
      subtitle: 'Mantenha os seus dados atualizados para uma melhor experiência.',
      personalInfo: 'Informação Pessoal',
      security: 'Segurança e Acesso',
      saveChanges: 'Guardar Alterações',
      success: 'Perfil atualizado com sucesso!',
      changePhoto: 'Alterar Foto',
      fields: {
        name: 'Nome Completo',
        email: 'Endereço de Email',
        phone: 'Telemóvel',
        location: 'Localização Principal',
        currentPassword: 'Palavra-passe Atual',
        newPassword: 'Nova Palavra-passe'
      }
    },
    about: {
      mission: 'A Nossa Missão',
      title: 'Democratizar a confiança no mercado automóvel.',
      desc: 'O Facilitador Car nasceu para resolver um problema antigo: a insegurança na compra de carros usados. A nossa plataforma liga compradores exigentes a stands criteriosamente verificados.',
      values: [
        { title: 'Rigor', desc: 'Apenas 10% dos stands que solicitam entrada são aprovados na nossa rede.' },
        { title: 'Transparência', desc: 'Informação clara, histórico verificado e contacto direto sem intermediários.' },
        { title: 'Inovação', desc: 'Tecnologia de ponta para busca avançada e gestão de leads em tempo real.' }
      ],
      historyTitle: 'Próxima Paragem: Fevereiro de 2026',
      historyDesc: 'Atualmente estamos em fase de beta privada, selecionando os melhores parceiros em Portugal e Espanha para o lançamento oficial.',
      stats: ['Stands Certificados', 'Segurança']
    },
    blog: {
      title: 'Blog Automobilístico',
      subtitle: 'Dicas, notícias e guias para ajudar você a fazer o melhor negócio com segurança.',
      readMore: 'Ler Artigo Completo',
      newsletterTitle: 'Não perca nenhuma novidade',
      newsletterDesc: 'Subscreva a nossa newsletter para receber as melhores oportunidades e guias de segurança no seu email.',
      subscribe: 'Subscrever',
      placeholder: 'Seu melhor email',
      related: 'Artigos Relacionados',
      readingTime: 'Tempo de leitura'
    },
    dashboard: {
      title: 'Dashboard Stand',
      subtitle: 'Stand Verificado',
      newAd: 'Novo Anúncio',
      weeklyPerformance: 'Performance Semanal',
      recentLeads: 'Leads Recentes',
      viewAll: 'Ver tudo',
      manageLeads: 'Gestão de Leads Avançada',
      stats: ['Leads Totais', 'Visualizações', 'Veículos Ativos', 'Tempo Resposta']
    },
    admin: {
      title: 'Painel Administrativo',
      subtitle: 'Visão Geral da Plataforma',
      stats: ['Usuários', 'Stands Ativos', 'Anúncios', 'Leads Mensais'],
      standsManagement: 'Gestão de Parceiros',
      approve: 'Aprovar',
      reject: 'Rejeitar',
      verified: 'Verificado',
      pending: 'Pendente',
      platformGrowth: 'Crescimento da Plataforma'
    },
    userArea: {
      greeting: 'Olá, Utilizador',
      memberSince: 'Membro desde',
      contactsDone: 'contactos realizados',
      editProfile: 'Editar Perfil',
      logout: 'Sair',
      myFavorites: 'Os Meus Favoritos',
      emptyTitle: 'Ainda não guardou nenhum veículo',
      emptyDesc: 'Explore o mercado e guarde os carros que mais gosta.',
      explore: 'Explorar Veículos'
    },
    footer: {
      desc: 'O marketplace que traz segurança e credibilidade para a compra do seu próximo veículo através de stands verificados.',
      links: 'Links',
      legal: 'Legal',
      rights: 'Todos os direitos reservados. Lançamento previsto para Fevereiro 2026.'
    }
  },
  en: {
    nav: { home: 'Home', vehicles: 'Vehicles', about: 'About', blog: 'Blog', dashboard: 'Stand', client: 'Client', admin: 'Admin' },
    home: {
      hero: 'Facilitador Car simplifies your purchase.',
      subHero: 'Buy safely in verified dealerships with expert support.',
      searchPlaceholder: 'Make, model or year...',
      featured: 'Featured Vehicles',
      viewAll: 'View All',
      whyUs: 'Why us?',
      credibility: 'Credibility that makes the difference in your choice.',
      whyUsDesc: 'At Facilitador Car, we are not just another marketplace. We rigorously filter our partners to ensure that every deal is transparent and safe.',
      benefits: [
        { title: 'Dealership Certification', desc: 'Only retailers with an impeccable track record.' },
        { title: 'Influencer Support', desc: 'Partners who test and approve vehicles.' },
        { title: 'Direct WhatsApp channel for speed.' }
      ]
    },
    common: {
      price: 'Price',
      year: 'Year',
      km: 'Km',
      fuel: 'Fuel',
      contact: 'Contact Stand',
      verified: 'Verified Stand',
      leads: 'Lead Management',
      search: 'Search',
      filters: 'Filters',
      brand: 'Make',
      category: 'Vehicle Type',
      maxPrice: 'Max Price',
      clearFilters: 'Clear Filters',
      noResults: 'No vehicles found',
      found: 'Vehicles found',
      sortBy: 'Sort by',
      recent: 'Most recent',
      back: 'Back',
      share: 'Share'
    },
    detail: {
      characteristics: 'Key Features',
      description: 'Vehicle Description',
      dealerInfo: 'Dealership Information',
      contactTitle: 'Contact Dealer Now',
      callButton: 'Call Dealer',
      location: 'Location',
      relatedTitle: 'Related Vehicles',
      verifiedReason: 'This dealer has passed Facilitador Car’s 12-point rigorous verification, ensuring clean history and high-quality service.'
    },
    createAd: {
      title: 'Create New Ad',
      subtitle: 'Enter vehicle data to start receiving qualified leads.',
      basicInfo: 'Basic Information',
      technicalSpecs: 'Technical Specs',
      commercial: 'Commercial and Photos',
      marketing: 'Marketing and Custom Link',
      publish: 'Publish Ad',
      success: 'Ad published successfully!',
      error: 'Error publishing. Check the fields.',
      upload: 'Photo Upload (URL)',
      subdomainTitle: 'Ad Subdomain',
      subdomainDesc: 'Create an exclusive landing page for this vehicle.',
      subdomainPlaceholder: 'ex: toyota-yaris-sport',
      fields: {
        brand: 'Brand',
        model: 'Model',
        year: 'Year',
        category: 'Category',
        mileage: 'Mileage',
        fuel: 'Fuel',
        transmission: 'Transmission',
        price: 'Price (€)',
        location: 'Location (City)',
        description: 'Detailed Description'
      }
    },
    editProfile: {
      title: 'Edit Profile',
      subtitle: 'Keep your details up to date for a better experience.',
      personalInfo: 'Personal Information',
      security: 'Security and Access',
      saveChanges: 'Save Changes',
      success: 'Profile updated successfully!',
      changePhoto: 'Change Photo',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        location: 'Main Location',
        currentPassword: 'Current Password',
        newPassword: 'New Password'
      }
    },
    about: {
      mission: 'Our Mission',
      title: 'Democratizing trust in the automotive market.',
      desc: 'Facilitador Car was born to solve an old problem: insecurity when buying used cars. Our platform connects demanding buyers to strictly verified dealerships.',
      values: [
        { title: 'Rigor', desc: 'Only 10% of dealerships that apply are approved in our network.' },
        { title: 'Transparency', desc: 'Clear information, verified history, and direct contact without intermediaries.' },
        { title: 'Innovation', desc: 'Cutting-edge technology for advanced search and real-time lead management.' }
      ],
      historyTitle: 'Next Stop: February 2026',
      historyDesc: 'We are currently in private beta, selecting the best partners in Portugal and Spain for the official launch.',
      stats: ['Certified Stands', 'Security']
    },
    blog: {
      title: 'Automotive Blog',
      subtitle: 'Tips, news, and guides to help you make the best deal safely.',
      readMore: 'Read Full Article',
      newsletterTitle: "Don't miss any updates",
      newsletterDesc: 'Subscribe to our newsletter to receive the best opportunities and safety guides in your email.',
      subscribe: 'Subscribe',
      placeholder: 'Your best email',
      related: 'Related Articles',
      readingTime: 'Reading time'
    },
    dashboard: {
      title: 'Dealer Dashboard',
      subtitle: 'Verified Dealership',
      newAd: 'New Listing',
      weeklyPerformance: 'Weekly Performance',
      recentLeads: 'Recent Leads',
      viewAll: 'View all',
      manageLeads: 'Advanced Lead Management',
      stats: ['Total Leads', 'Views', 'Active Vehicles', 'Response Time']
    },
    admin: {
      title: 'Admin Panel',
      subtitle: 'Platform Overview',
      stats: ['Users', 'Active Stands', 'Listings', 'Monthly Leads'],
      standsManagement: 'Partner Management',
      approve: 'Approve',
      reject: 'Reject',
      verified: 'Verified',
      pending: 'Pending',
      platformGrowth: 'Platform Growth'
    },
    userArea: {
      greeting: 'Hello, User',
      memberSince: 'Member since',
      contactsDone: 'contacts made',
      editProfile: 'Edit Profile',
      logout: 'Logout',
      myFavorites: 'My Favorites',
      emptyTitle: "You haven't saved any vehicles yet",
      emptyDesc: 'Explore the market and save the car you like best.',
      explore: 'Explore Vehicles'
    },
    footer: {
      desc: 'The marketplace that brings security and credibility to your next vehicle purchase through verified dealerships.',
      links: 'Links',
      legal: 'Legal',
      rights: 'All rights reserved. Launch scheduled for February 2026.'
    }
  }
};
