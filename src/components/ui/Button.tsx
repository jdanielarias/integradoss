// src/components/ui/Button.tsx
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-full font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};


