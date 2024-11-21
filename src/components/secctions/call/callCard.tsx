"use client"
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin } from 'lucide-react';

interface Call {
  title: string;
  date: string;
  location: string;
  organizer: string;
  description: string;
}

const CallCard = ({ call }: { call: Call }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{call.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{call.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{call.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span className="text-sm">{call.organizer}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{call.description}</p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
          Más información
        </button>
      </div>
    </motion.div>
  );
};

export default CallCard;