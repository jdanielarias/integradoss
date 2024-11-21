import { Mail, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INTEGRADOSS</h3>
            <p className="text-gray-400">
              Sistemas Integrados de Gestión - Grupo de Investigación
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-2">
              <a href="mailto:Integradoss.info@gmal.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail size={16} className="mr-2" />
                Integradoss.info@gmal.com
              </a>
              <a href="mailto:Información@integradoss.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail size={16} className="mr-2" />
                Información@integradoss.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/se_integradoss" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@integradoss" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
              <a href="https://x.com/Se_Integradoss" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} INTEGRADOSS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};