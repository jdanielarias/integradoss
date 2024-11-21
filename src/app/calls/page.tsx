"use client"
import CallCard from "@/components/secctions/call/callCard";
import { motion } from "framer-motion";

const CallsPage = () => {
    const calls = [
      {
        title: "Convocatoria para la aprobación de Proyectos de Investigación Especiales (PIE)",
        date: "2022",
        location: "Universidad Nacional Abierta y a Distancia - UNAD",
        organizer: "UNAD",
        description: "Convocatoria para presentar proyectos de investigación especiales..."
      },
      {
        title: "XIX Encuentro Departamental de Semilleros de Investigación",
        date: "2022",
        location: "Nodo Cesar",
        organizer: "REDCOLSI",
        description: "Encuentro departamental para la presentación de proyectos de investigación..."
      },
      // Add more calls here
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
            Convocatorias
          </motion.h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calls.map((call, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CallCard call={call} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CallsPage;