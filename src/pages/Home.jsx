import React from 'react';
import { motion } from 'framer-motion';
import { RiArmchairFill } from "react-icons/ri";
import Services from './Services';


const Home = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10k+', label: 'Happy Clients' },
    { number: '50+', label: 'Awards Won' },
  ];

  return (
    <section id="home" className="relative pt-20">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Beauty Salon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-purple-900/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RiArmchairFill className="mx-auto text-6xl text-pink-200 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Natural Glow
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Experience luxury beauty treatments tailored to enhance your unique features in our premium wellness sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors"
              >
                Book Session
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
<Services/>
      {/* Stats Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-pink-50 rounded-xl"
              >
                <p className="text-4xl font-bold text-pink-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RiArmchairFill className="mx-auto text-4xl mb-6 text-pink-200" />
          <h2 className="text-3xl font-bold mb-6">Ready for Transformation?</h2>
          <p className="text-pink-100 mb-8">
            Join our membership program for exclusive benefits and priority bookings
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-pink-900 px-8 py-4 rounded-full hover:bg-pink-50 transition-colors"
          >
            Become a Member
          </motion.button>
        </div>
      </div>
      
    </section>
  );
};

export default Home;