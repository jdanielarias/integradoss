"use client"
import { motion } from 'framer-motion';
import {  Link } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  year: string;
  doi?: string;
  isbn?: string;
}

const PublicationCard = ({ publication }: { publication: Publication }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{publication.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{publication.authors}</p>
          <p className="text-gray-500 text-sm mb-4">{publication.year}</p>
          {publication.doi && (
            <a 
              href={publication.doi}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              <Link size={14} className="mr-1" />
              DOI: {publication.doi}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default PublicationCard;