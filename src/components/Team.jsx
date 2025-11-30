import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiX } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Khelil Ben Abdelghani',
    role: 'PDG et Fondateur',
    image: '/team/khalil.jpeg',
    linkedin: 'https://www.linkedin.com/in/khelil/',
    bio: 'Director of Innovation & Development-UTIC Group | President Commission on Marketing & Advertising @International Chamber of Commerce ICCTunisia | Président Commission Marketing & Communication CCI Tuniso-Française CCITF'
  },
  {
    name: 'Safouene Kais',
    role: 'Gérant',
    image: '/team/safwen.jpeg',
    linkedin: 'https://www.linkedin.com/in/kais-safouene-3b7171188/',
    bio: 'Gérant de 2 sociétés en développement web/mobile et SEO/AEO et AI. CEO @K.M Solutions - Nous aidons les entreprises à booster leur SEO et développement web. Découvrez nos services : kmsolutions.tn'
  },
  {
    name: 'Khiari Mohamed',
    role: 'Développeur Full-Stack\nJavaScript',
    image: '/team/DSC-modified.JPG',
    linkedin: 'https://www.linkedin.com/in/khiari-mohamed-aba313316/',
    bio: 'Expert en développement logiciel avec 4 ans d\'expérience. Spécialisé dans le développement full-stack moderne et l\'intégration de solutions d\'intelligence artificielle.'
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electricPink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
            Notre <span className="text-purple-400">Équipe</span>
          </h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto">
            Les experts derrière UlyTech
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-16 sm:gap-y-20 lg:gap-y-28">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 sm:mb-5 group">
                <img
                  src={member.image}
                  alt={member.name}
                  onClick={() => setSelectedMember(member)}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover grayscale cursor-pointer hover:scale-105 transition-transform"
                />
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    <FiLinkedin className="w-4 h-4 text-white/60" />
                  </a>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white text-center mb-1.5 sm:mb-2">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/40 text-center leading-relaxed whitespace-pre-line">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center transition-all"
                >
                  <FiX className="w-5 h-5 text-white/60" />
                </button>

                <div className="flex flex-col items-center text-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover grayscale mb-4 sm:mb-6"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-purple-400 text-sm mb-4 sm:mb-6 whitespace-pre-line">
                    {selectedMember.role}
                  </p>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {selectedMember.bio}
                  </p>
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg transition-all text-white/80 hover:text-white"
                    >
                      <FiLinkedin className="w-4 h-4" />
                      <span className="text-sm">Voir le profil LinkedIn</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
