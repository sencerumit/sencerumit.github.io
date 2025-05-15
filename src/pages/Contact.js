import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:sencerumit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\nMessage:\n" + message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="py-6 sm:py-8 md:py-12 max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-4 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="section-title text-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
        {t('contactPage.title')}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 sm:mb-2 text-nier-dark font-nier-mono text-xs sm:text-sm"
          >
            {t('contactPage.nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-nier-light/50 border border-nier-border p-2 sm:p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-xs sm:text-sm rounded"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 sm:mb-2 text-nier-dark font-nier-mono text-xs sm:text-sm"
          >
            {t('contactPage.emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-nier-light/50 border border-nier-border p-2 sm:p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-xs sm:text-sm rounded"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-1 sm:mb-2 text-nier-dark font-nier-mono text-xs sm:text-sm"
          >
            {t('contactPage.subjectLabel')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-nier-light/50 border border-nier-border p-2 sm:p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-xs sm:text-sm rounded"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 sm:mb-2 text-nier-dark font-nier-mono text-xs sm:text-sm"
          >
            {t('contactPage.messageLabel')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-nier-light/50 border border-nier-border p-2 sm:p-3 
                     focus:outline-none focus:border-nier text-nier-dark 
                     font-nier-mono text-xs sm:text-sm rounded"
            required
          />
        </div>

        <button type="submit" className="matrix-button w-full md:w-auto min-h-[44px] text-base sm:text-lg">
          {t('contactPage.sendButton')}
        </button>
      </form>

      <div className="mt-6 sm:mt-8 md:mt-12 text-center">
        {/* Social links removed as per user request */}
      </div>
    </motion.div>
  );
};

export default Contact;