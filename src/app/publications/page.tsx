
"use client"
import PublicationCard from '@/components/secctions/publications/publicationCard';
import { Publication } from '@/lib/types';
import { motion } from 'framer-motion';
import { Book, BookOpen, FileText, Link } from 'lucide-react';
import { useState } from 'react';



const PublicationsPage = () => {
  type TabKey = 'articles' | 'books' | 'chapters' | 'documents';
  const [activeTab, setActiveTab] = useState<TabKey>('articles');

  const publications: Record<TabKey, Publication[]> = {
    articles: [
      {
          title: "Sistemas de Procedimientos en los Métodos de Enseñanza y Aprendizaje",
          authors: "Garavit, J.",
          year: "2021",
          doi: "doi.org/10.35542/osf.io/5n6kv",
          type: 'article'
      },
      {
          title: "Las Matemáticas Mediadas por Ova's en la Educación Blended Learning",
          authors: "Garavit, J.",
          year: "2019",
          doi: "doi.org/10.13140/RG.2.2.21119.56489",
          type: 'article'
      }
    ],
    books: [
      {
          title: "Formación Colaborativa",
          authors: "Garavit, J.",
          year: "2021",
          isbn: "978-628-95094-1-0",
          type: 'article'
      },
      {
          title: "Aspectos de la Educación Superior",
          authors: "Garavit, J.",
          year: "2022",
          isbn: "978-628-95094-0-3",
          type: 'article'
      }
    ],
    chapters: [
      {
          title: "Detección de Condiciones Anómalas en Redes de Datos Usando Bases de Información de Gestión",
          authors: "Garavit, J.",
          year: "2019",
          isbn: "978-958-5589-06-3",
          type: 'article'
      },
      {
          title: "Retos y Patrones Variables de la Educación a Distancia y el Aprendizaje Mixto",
          authors: "Garavit, J.",
          year: "2021",
          isbn: "978-958-49-2799-6",
          type: 'article'
      }
    ],
    documents: [
      {
          title: "Adiamento do Treinamento Colaborativo nos Tipos de Avaliação",
          authors: "Garavit, J.",
          year: "2021",
          doi: "10.31219/osf.io/2dje9",
          type: 'article'
      },
      {
          title: "Arquitetura de Treinamento Colaborativo",
          authors: "Garavit, J.",
          year: "2021",
          doi: "10.31219/osf.io/43ast",
          type: 'article'
      }
    ]
  };

  const tabIcons = {
    articles: <FileText size={20} />,
    books: <Book size={20} />,
    chapters: <BookOpen size={20} />,
    documents: <FileText size={20} />
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Publicaciones
        </motion.h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(tabIcons).map(([key, icon]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key as TabKey)}
              className={`flex items-center px-6 py-3 rounded-full ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              <span className="ml-2 capitalize">{key}</span>
            </motion.button>
          ))}
        </div>

        {/* Publications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {publications[activeTab].map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PublicationCard publication={publication} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationsPage;