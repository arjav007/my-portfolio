import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations

// --- Main Contact Section ---
export default function Contact() {
  // Your existing Formspree logic is preserved here.
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      // IMPORTANT: This uses your specific Formspree endpoint.
      const response = await fetch('https://formspree.io/f/xovnzlvk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form on success
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <AnimatedSection className="py-24 bg-black/20" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="mb-8 text-lg text-gray-300 max-w-xl mx-auto">
          Have a project idea or want to collaborate? Let's connect!
        </p>

        {/* The form is styled with the futuristic glassmorphism effect */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          ></motion.textarea>

          <div className="text-center">
            <motion.button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(156, 39, 176, 0.7)" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Send Message
            </motion.button>
          </div>

          {formStatus && <p className="mt-4 text-center text-gray-300">{formStatus}</p>}
        </form>
      </div>
    </AnimatedSection>
  );
};

