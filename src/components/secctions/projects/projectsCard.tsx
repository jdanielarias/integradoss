
"use client"
import { motion } from 'framer-motion';
import { Clock, Users, Target, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  objective: string;
  duration: string;
  team: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Target size={16} className="mr-2" />
            <span className="text-sm">Objetivo: {project.objective}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">Duración: {project.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span className="text-sm">Equipo: {project.team}</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            Ver más detalles
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
