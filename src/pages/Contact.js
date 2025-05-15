import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="py-12 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="section-title text-center">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="name" 
            className="block mb-2 text-nier-dark font-nier-mono text-sm"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-nier-light/50 border border-nier-border p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-sm"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block mb-2 text-nier-dark font-nier-mono text-sm"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-nier-light/50 border border-nier-border p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-sm"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block mb-2 text-nier-dark font-nier-mono text-sm"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-nier-light/50 border border-nier-border p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-sm"
            required
          />
        </div>

        <button type="submit" className="matrix-button w-full">
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center">
        <h2 className="text-xl mb-4 animate-glow">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          {/* Add your social media links here */}
          <a href="#" className="matrix-button">
            GitHub
          </a>
          <a href="#" className="matrix-button">
            LinkedIn
          </a>
          <a href="#" className="matrix-button">
            Twitter
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 