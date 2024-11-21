'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, Twitter, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setSending(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSending(false);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Información de Contacto</h2>
              
              <div className="space-y-6">
                {/* Emails */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Correo Electrónico</h3>
                    <p className="text-gray-600">Integradoss.info@gmal.com</p>
                    <p className="text-gray-600">Información@integradoss.com</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Redes Sociales</h3>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://www.instagram.com/se_integradoss"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://www.youtube.com/@integradoss"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://x.com/Se_Integradoss"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa o imagen placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
              <img
                src="/api/placeholder/400/200"
                alt="Location"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={sending}
                >
                  {sending ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;