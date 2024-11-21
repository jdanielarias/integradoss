import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Investigadores', path: '/investigators' },
    { label: 'Convocatorias', path: '/calls' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Publicaciones', path: '/publications' },
    { label: 'Contacto', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/')}
          >
            <div className="flex items-center">
              <img
                src="/img/logo.png"
                alt="INTEGRADOSS"
                className="h-10 w-10"
              />
              <span className={`ml-2 font-bold text-xl ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                INTEGRADOSS
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:max-w-lg md:mx-auto md:rounded-xl"
          >
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Buscar..."
                className="ml-2 w-full bg-transparent outline-none text-gray-900"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;