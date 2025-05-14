import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaBrush, FaRegGem, FaSprayCan } from 'react-icons/fa';
import { GiHotSpices, GiMirrorMirror } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1599351431402-50c0dc3346a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      icon: <FaCut className="text-4xl text-pink-600" />,
      title: 'Hair Styling',
      description: 'Premium hair treatments and cutting-edge styling techniques',
      highlights: ['Keratin Treatment', 'Balayage Coloring', 'Extensions']
    },
    {
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      icon: <FaBrush className="text-4xl text-pink-600" />,
      title: 'Makeup Artistry',
      description: 'Professional makeup for every occasion',
      highlights: ['Bridal Makeup', 'Editorial Looks', 'Airbrush Technique']
    },
    {
      image: 'https://unsplash.com/photos/close-up-of-young-beautiful-woman-relaxing-during-massage-in-spa-salon-fRhI-lZr-3o',
      icon: <GiHotSpices className="text-4xl text-pink-600" />,
      title: 'Spa Treatments',
      description: 'Rejuvenating body and facial therapies',
      highlights: ['Hot Stone Massage', 'Detox Wrap', 'Aromatherapy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GiMirrorMirror className="mx-auto text-5xl text-pink-600 mb-6" />
          <h2 className="text-4xl font-bold text-pink-900 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury beauty treatments crafted to enhance your natural radiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-900/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4 text-pink-100">{service.description}</p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center">
                      <FaRegGem className="text-pink-400 mr-2" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 bg-white text-pink-900 px-6 py-2 rounded-full hover:bg-pink-100 transition-colors flex items-center">
                  <FaSprayCan className="mr-2" />
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;