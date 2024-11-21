"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

interface Researcher {
  name: string;
  position: string;
  profile: string;
  image?: string;
  cvlac?: string;
  orcid?: string;
  scholar?: string;
  email?: string;
}

const ResearcherCard = ({ researcher }: { researcher: Researcher }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-72 h-96 relative perspective"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white rounded-xl shadow-lg p-6 h-full">
            <div className="flex flex-col items-center">
              <img
                src={researcher.image || "/api/placeholder/150/150"}
                alt={researcher.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{researcher.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{researcher.position}</p>
              <p className="text-gray-600 text-sm mb-4">{researcher.profile}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 h-full text-white">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-bold mb-2">Enlaces académicos</h4>
                <div className="space-y-2">
                  {researcher.cvlac && (
                    <a href={researcher.cvlac} className="flex items-center gap-2 hover:text-blue-200">
                      <BookOpen size={16} />
                      <span>CvLAC</span>
                    </a>
                  )}
                  {researcher.orcid && (
                    <a href={researcher.orcid} className="flex items-center gap-2 hover:text-blue-200">
                      <BookOpen size={16} />
                      <span>ORCID</span>
                    </a>
                  )}
                  {researcher.scholar && (
                    <a href={researcher.scholar} className="flex items-center gap-2 hover:text-blue-200">
                      <BookOpen size={16} />
                      <span>Google Scholar</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Mail className="w-6 h-6 cursor-pointer hover:text-blue-200" />
                <Github className="w-6 h-6 cursor-pointer hover:text-blue-200" />
                <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResearcherCard;