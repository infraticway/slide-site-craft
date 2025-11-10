import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-BR' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  'pt-BR': {
    'hero.title': 'Conectando dados, estratégia e tecnologia',
    'hero.subtitle': 'Consultoria estratégica para impulsionar empresas internacionais no Brasil e América Latina',
    'hero.contact': 'Entre em contato',
    'hero.learnMore': 'Saiba mais',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.values': 'Valores',
    'nav.ceo': 'CEO',
    'nav.contact': 'Contato',
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Entre em contato para descobrir como podemos ajudar sua empresa',
    'contact.email': 'Enviar e-mail',
    'contact.call': 'Ligar',
    'contact.linkedin': 'Conectar no LinkedIn',
  },
  'en': {
    'hero.title': 'Connecting data, strategy and technology',
    'hero.subtitle': 'Strategic consulting to drive international companies in Brazil and Latin America',
    'hero.contact': 'Get in touch',
    'hero.learnMore': 'Learn more',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.values': 'Values',
    'nav.ceo': 'CEO',
    'nav.contact': 'Contact',
    'contact.title': 'Let\'s talk?',
    'contact.subtitle': 'Contact us to discover how we can help your company',
    'contact.email': 'Send email',
    'contact.call': 'Call',
    'contact.linkedin': 'Connect on LinkedIn',
  },
  'es': {
    'hero.title': 'Conectando datos, estrategia y tecnología',
    'hero.subtitle': 'Consultoría estratégica para impulsar empresas internacionales en Brasil y América Latina',
    'hero.contact': 'Contáctenos',
    'hero.learnMore': 'Saber más',
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.values': 'Valores',
    'nav.ceo': 'CEO',
    'nav.contact': 'Contacto',
    'contact.title': '¿Hablamos?',
    'contact.subtitle': 'Contáctenos para descubrir cómo podemos ayudar a su empresa',
    'contact.email': 'Enviar correo',
    'contact.call': 'Llamar',
    'contact.linkedin': 'Conectar en LinkedIn',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
