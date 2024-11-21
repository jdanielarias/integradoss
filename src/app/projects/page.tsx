"use client"
import { motion } from "framer-motion";
import {ProjectCard} from '../../components/secctions/projects/projectsCard';

const ProjectsPage = () => {
    const projects = [
      {
        title: "Sistemas Integrales de Prácticas y Pasantías Profesionales (SIIPRO)",
        description: "Diseño e implementación de plataforma para gestión de prácticas y pasantías en las escuelas de la UNAD.",
        objective: "Optimizar el proceso de gestión de prácticas",
        duration: "12 meses",
        team: "5 investigadores"
      },
      {
        title: "Aplicación Metodológica Interactiva para SIG",
        description: "Diseño de aplicación para el manejo de sistemas integrados de gestión en Mipymes de Valledupar.",
        objective: "Facilitar la implementación de SIG",
        duration: "8 meses",
        team: "3 investigadores"
      },
      // Add more projects here
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proyectos de Investigación
          </motion.h1>
  
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default ProjectsPage;