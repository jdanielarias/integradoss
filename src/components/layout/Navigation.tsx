import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    // Handle client-side navigation
    window.location.href = path;
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img
              src="/api/placeholder/40/40"
              alt="INTEGRADOSS"
              className="h-10 w-10"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavigation(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Investigadores', path: '/investigators' },
  { label: 'Convocatorias', path: '/calls' },
  { label: 'Proyectos', path: '/projects' },
  { label: 'Publicaciones', path: '/publications' },
  { label: 'Contacto', path: '/contact' }
];

export default Navigation;