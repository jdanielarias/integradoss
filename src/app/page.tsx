"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          {/* Animated background elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            INTEGRADOSS
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sistemas Integrados de Gestión
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Conoce más
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        ref={ref}
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Nuestros Propósitos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  {purpose.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{purpose.title}</h3>
                <p className="text-gray-600">{purpose.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const purposes = [
  {
    title: "Comunidad Académica",
    description: "Aportar a la conformación y consolidación de comunidad académica desde la investigación.",
    icon: "🎓"
  },
  {
    title: "Análisis Crítico",
    description: "Realizar análisis críticos sobre temáticas de diseño de sistemas mediante seminarios y talleres.",
    icon: "🔍"
  },
  {
    title: "Desarrollo de Competencias",
    description: "Desarrollar estrategias de formación y evaluación que impacten positivamente el desarrollo operativo.",
    icon: "📈"
  }
];

export default HomePage;