"use client"
import ResearcherCard from "@/components/secctions/researcher/ResearcherCard";
import { motion } from "framer-motion";

const ResearchersPage = () => {
    const researchers = [
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      {
        name: "JAIRIT GARAVIT",
        position: "Líder del Grupo (IA)",
        profile: "Ingeniero Industrial",
        image: "/img/user.png",
        cvlac: "https://scienti.colciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001678210",
        orcid: "https://orcid.org/0000-0003-1976-9891",
        scholar: "https://scholar.google.es/citations?user=V32kB74AAAAJ&hl=es",
        email: "GrupLac@integradoss.com"
      },
      // Add more researchers here
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
            Nuestros Investigadores
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-8">
            {researchers.map((researcher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ResearcherCard researcher={researcher} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ResearchersPage;