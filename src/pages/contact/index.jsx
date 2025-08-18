import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact(props) {
  const posts = props.posts;

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="h-fit w-screen bg-darkPurple">
      <Head>
        <title>BITS2BYTES 2K25 Contact</title>
      </Head>
      <Header id="Navbar" />
      <main className='pt-[5.5rem] h-full'>
        {/* Page Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-clash font-semibold mb-4 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-clash max-w-3xl mx-auto leading-relaxed">
            Have questions about BITS2BYTES 2025? Want to collaborate or get involved? We'd love to hear from you!
          </p>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-main_primary to-orange-400 mx-auto mt-6 sm:mt-8 rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Connect With Us Section */}
          <motion.div
            className="mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-clash font-semibold mb-8 sm:mb-12">
              Connect With Us
            </h2>

            {/* Premium Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Instagram Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">Instagram</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Follow us for updates</p>
                  <a
                    href="https://instagram.com/impulse_tbit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-clash"
                  >
                    Follow Us
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-green-400 to-green-600 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Quick support chat</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-clash"
                  >
                    Chat Now
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-main_primary to-pink-500 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-main_primary to-pink-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">Email</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Official inquiries</p>
                  <a
                    href="mailto:impulse@tbit.ac.in"
                    className="bg-gradient-to-r from-main_primary to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-clash"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Additional Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="bg-white/10 border-[.5px] border-gray-400/60 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg sm:text-xl font-clash">Call Us</h3>
                <p className="text-white mb-2 text-lg font-chakra">+91 98765 43210</p>
                <p className="text-sm text-gray-300 font-chakra">Mon-Fri, 9AM-6PM IST</p>
              </motion.div>

              <motion.div
                className="bg-white/10 border-[.5px] border-gray-400/60 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg sm:text-xl font-clash">Visit Us</h3>
                <p className="text-white mb-2 text-lg font-chakra">TBIT Campus</p>
                <p className="text-sm text-gray-300 font-chakra">Kolkata, West Bengal</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "contact.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}