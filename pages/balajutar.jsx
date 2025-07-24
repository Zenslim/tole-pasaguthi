import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

export default function Balajutar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-gray-100 text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <span className="text-xl font-bold text-green-700 cursor-pointer">ToleSudhar</span>
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/balajutar"><span className="text-green-800 hover:underline cursor-pointer">Balajutar</span></Link>
          <Link href="#join"><span className="text-green-800 hover:underline cursor-pointer">Join</span></Link>
          <Link href="#gallery"><span className="text-green-800 hover:underline cursor-pointer">Gallery</span></Link>
        </div>
      </nav>

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

      {/* Join Form Section */}
      <motion.section id="join" className="bg-green-100 py-16 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Join Balajutar Tole Sudhar</h2>
        <p className="mb-6 text-gray-700">Become a volunteer, supporter, or coordinator. Let's build the future together.</p>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input className="w-full p-3 rounded border" type="text" name="name" placeholder="Your Name" required />
          <input className="w-full p-3 rounded border" type="email" name="email" placeholder="Your Email" required />
          <textarea className="w-full p-3 rounded border" name="message" rows="4" placeholder="How would you like to contribute?" required></textarea>
          <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition" type="submit">Send</button>
        </form>
      </motion.section>

      {/* Gallery Section */}
      <motion.section id="gallery" className="bg-white py-16 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <img className="rounded shadow" src="/images/cleanup.jpg" alt="Cleanup" />
          <img className="rounded shadow" src="/images/mural.jpg" alt="Mural" />
          <img className="rounded shadow" src="/images/garden.jpg" alt="Tole Garden" />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Balajutar Tole Sudhar | Chapter of ToleSudhar.org by Pasaguthi
      </footer>
    </div>
  );
}
