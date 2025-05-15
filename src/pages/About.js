import React from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import ResumePDF from '../services/PDFGenerator';
import content from '../config/content';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [pdfError, setPdfError] = React.useState(null);
  const { language = 'en', t } = useLanguage() || {};
  const currentResumeData = content[language]?.resume || content.en.resume;

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async (blob) => {
    try {
      if (!blob) {
        throw new Error('PDF blob is not available');
      }
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-resume-${language}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error.message);
      setPdfError(error.message);
    }
  };

  const renderDescriptionWithLink = (description) => {
    const parts = description.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        return (
          <a 
            key={index} 
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-nier-accent hover:underline"
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      className="py-6 sm:py-8 md:py-12 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto px-2 sm:px-4 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="section-title text-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
        {t('about.title')}
      </h1>

      <div className="text-center mb-4 sm:mb-6">
        {isClient ? (
          <BlobProvider document={<ResumePDF data={currentResumeData} language={language} />}>
            {({ blob, url, loading, error }) => (
              <button
                onClick={() => blob && handleDownload(blob)}
                className={`nier-button inline-flex items-center gap-2 hover:scale-105 transition-transform ${
                  loading || error ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading || error}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">↻</span> 
                    {t('common.loading')}
                  </span>
                ) : error ? (
                  <span className="flex items-center gap-2 text-red-500">
                    ❌ {error.message || t('common.error')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>📄</span>
                    <span className="font-nier-mono">{t('about.downloadResume')}</span>
                  </span>
                )}
              </button>
            )}
          </BlobProvider>
        ) : (
          <button 
            className="nier-button opacity-50 cursor-not-allowed"
            disabled
          >
            {t('common.loading')}
          </button>
        )}
      </div>

      {/* Profile Section */}
      <div className="nier-panel mb-8 sm:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-base sm:text-lg md:text-xl font-nier text-nier-dark mb-2 sm:mb-3 md:mb-4">{t('about.professionalOverview')}</h2>
            <p className="text-nier-dark/80 leading-relaxed mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">
              {currentResumeData.about}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {currentResumeData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nier-button text-xs md:text-sm mb-2"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0 text-xs sm:text-sm">
            <div className="font-nier-mono text-xs text-nier-dark/60 mb-2">{t('about.contact')}</div>
            <div className="text-nier-dark mb-1">{currentResumeData.personalInfo.email}</div>
            <div className="text-nier-dark mb-1">{currentResumeData.personalInfo.phone}</div>
            <div className="text-nier-dark">{currentResumeData.personalInfo.location}</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        {Object.entries(currentResumeData.skills).map(([category, skills], index) => (
          <div key={index} className="nier-panel">
            <h3 className="font-nier-mono text-xs md:text-sm text-nier-dark/60 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-nier-mono border border-nier-border/50 
                           text-nier-dark/70 bg-nier-light/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="nier-panel mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-4 sm:mb-6">{t('about.experience.title')}</h2>
        <div className="space-y-6 sm:space-y-8">
          {currentResumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-4 sm:pl-8 border-l border-nier-border">
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1 bg-nier-border"></div>
              <h3 className="font-nier text-base sm:text-lg text-nier-dark mb-1">{exp.title}</h3>
              <div className="font-nier-mono text-xs text-nier-dark/60 mb-2">
                {exp.company} • {exp.period}
              </div>
              <p className="text-nier-dark/80 mb-2 sm:mb-3 text-xs sm:text-sm">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs sm:text-sm text-nier-dark/70">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Publications - Disabled as per user request */}
      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="nier-panel">
          <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-3 sm:mb-4">{t('about.awards.title')}</h2>
          <div className="space-y-3 sm:space-y-4">
            {currentResumeData.awards.map((award, index) => (
              <div key={index}>
                <h3 className="font-nier text-nier-dark text-sm sm:text-base">{award.name}</h3>
                <div className="font-nier-mono text-xs text-nier-dark/60 mb-1">
                  {award.issuer} • {award.date}
                </div>
                <p className="text-xs sm:text-sm text-nier-dark/70">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="nier-panel">
          <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-3 sm:mb-4">{t('about.publications.title')}</h2>
          <div className="space-y-3 sm:space-y-4">
            {currentResumeData.publications.map((pub, index) => (
              <div key={index}>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nier text-nier-dark hover:text-nier-accent text-sm sm:text-base"
                >
                  {pub.title}
                </a>
                <div className="font-nier-mono text-xs text-nier-dark/60">
                  {pub.publisher} • {pub.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      {/* Interests, Hobbies & Volunteer Work */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="nier-panel">
          <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-3 sm:mb-4">{t('about.interests.title')}</h2>
          <div className="flex flex-wrap gap-2">
            {currentResumeData.interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs sm:text-sm font-nier-mono border border-nier-border/50 
                         text-nier-dark/70 bg-nier-light/30 rounded"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div className="nier-panel">
          <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-3 sm:mb-4">{t('about.hobbies.title')}</h2>
          <div className="space-y-2 sm:space-y-3">
            {currentResumeData.hobbies.map((hobby, index) => (
              <div key={index} className="group">
                <h3 className="text-nier-dark font-semibold group-hover:text-nier-accent transition-colors text-xs sm:text-base">
                  {hobby.name}
                </h3>
                <p className="text-xs sm:text-sm text-nier-dark/70">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="nier-panel">
          <h2 className="text-lg sm:text-xl font-nier text-nier-dark mb-3 sm:mb-4">{t('about.volunteerWork.title')}</h2>
          <div className="space-y-2 sm:space-y-4">
            {currentResumeData.volunteerWork.map((work, index) => (
              <div key={index}>
                <h3 className="font-nier text-nier-dark text-xs sm:text-base">{work.role}</h3>
                <div className="font-nier-mono text-xs text-nier-dark/60 mb-1">
                  {work.organization} • {work.period}
                </div>
                <p className="text-xs sm:text-sm text-nier-dark/70">
                  {renderDescriptionWithLink(work.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;