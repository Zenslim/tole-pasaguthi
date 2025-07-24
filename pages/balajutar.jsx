import { motion } from 'framer-motion';
import React from 'react';

export default function Balajutar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-20 px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl font-bold mb-4 text-green-800" layoutId="title">
          Balajutar Tole Sudhar Samaj
        </motion.h1>
        <motion.p className="text-xl max-w-xl mx-auto text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          A grassroots initiative in Kathmandu, founded in 2080 B.S., restoring dignity and beauty to our neighborhood.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="bg-white py-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Ongoing Projects</h2>
          <ul className="text-lg text-gray-700 space-y-4">
            <li>🌿 Neighborhood Waste Cleanup</li>
            <li>🎨 Mural Painting & Wall Beautification</li>
            <li>🌸 Tole Garden Revival (Native Plants)</li>
            <li>🧒 Youth Engagement & Cultural Storytelling</li>
            <li>📜 Drafting Tole By-Laws & Samiti Structure</li>
          </ul>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="bg-green-800 text-white py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Want to Support Balajutar?</h2>
        <p className="max-w-xl mx-auto mb-6">
          Join us in bringing back the spirit of community, ritual, and responsibility to every alley of Balajutar.
        </p>
        <a
          href="mailto:hello@pasaguthi.org"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact the Balajutar Samaj
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Balajutar Tole Sudhar | Chapter of ToleSudhar.org by Pasaguthi
      </footer>
    </div>
  );
}
