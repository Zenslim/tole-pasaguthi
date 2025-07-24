import { motion } from 'framer-motion';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-gray-100 text-gray-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-20 px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl font-bold mb-4 text-red-800" layoutId="title">
          ToleSudhar
        </motion.h1>
        <motion.p className="text-xl max-w-xl mx-auto text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          A sacred civic movement under Pasaguthi.org — restoring the soul of every neighborhood, one tole at a time.
        </motion.p>
        <motion.div className="mt-8" whileHover={{ scale: 1.05 }}>
          <a
            href="#start"
            className="bg-red-700 text-white px-6 py-3 rounded-full shadow hover:bg-red-800 transition"
          >
            Start Your Tole Chapter
          </a>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="bg-white py-16 px-6"
        id="start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-red-800 mb-4">Why ToleSudhar?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our guthis safeguarded temples. Our toles must now safeguard living streets.
            ToleSudhar reconnects civic soul, cultural roots, and youth-led transformation.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="bg-red-50 py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">🧹 Clean & Beautify</h3>
            <p className="text-gray-600">Street murals, waste cleanup, native plants — visual pride begins with care.</p>
          </motion.div>
          <motion.div 
            className="p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">📜 Self-Govern</h3>
            <p className="text-gray-600">Form a Tole Samaj. Create by-laws. Become a node in the Pasaguthi DAO network.</p>
          </motion.div>
          <motion.div 
            className="p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">🌸 Revive Community</h3>
            <p className="text-gray-600">Run programs for children, elders, artisans — rooted in memory, ritual, and love.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-red-800 text-white py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Tole?</h2>
        <p className="max-w-xl mx-auto mb-6">
          Whether you're in Balajutar, Bungamati, or abroad — every tole deserves revival.
          We’ll help you form your Samaj, digitize it, and connect it to Pasaguthi.
        </p>
        <a
          href="mailto:hello@pasaguthi.org"
          className="bg-white text-red-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us to Begin
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} ToleSudhar | A civic movement by Pasaguthi.org
      </footer>
    </div>
  );
}
