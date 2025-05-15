import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Font, Image } from '@react-pdf/renderer';

// Embed Roboto fonts directly instead of loading from URL/file
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingTop: 25,
    paddingHorizontal: 30,
    fontFamily: 'Roboto'
  },
  header: {
    marginBottom: 8,
  },
  headerContent: {
    paddingBottom: 8,
    flexShrink: 0,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
    lineHeight: 1.2,
  },
  headerSubtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#4a4a4a',
    marginBottom: 4,
    lineHeight: 1.2,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 8.5,
    color: '#666666',
    gap: 10,
    marginTop: 4,
    lineHeight: 1.2,
  },
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginTop: 5,
    marginBottom: 10,
  },
  section: {
    marginBottom: 8,
    paddingBottom: 3,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#1a1a1a',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dddddd',
    paddingBottom: 2,
    marginBottom: 4
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
    color: '#333333',
    lineHeight: 1.2
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: 9,
  },
  skillsContainer: {
    marginTop: 3,
  },
  skillCategory: {
    marginBottom: 3,
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 2
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4
  },
  skill: {
    fontSize: 8.5,
    backgroundColor: '#f3f4f6',
    padding: '2px 4px',
    borderRadius: 2,
    color: '#4a4a4a'
  },
  experienceItem: {
    marginBottom: 6,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1
  },
  experienceTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  experienceDate: {
    fontSize: 8.5,
    color: '#666666'
  },
  experienceCompany: {
    fontSize: 9,
    color: '#4a4a4a',
    marginBottom: 1
  },
  achievementList: {
    marginLeft: 8,
    marginTop: 1
  },
  achievement: {
    fontSize: 8.5,
    color: '#4a4a4a',
    marginBottom: 1,
    lineHeight: 1.15
  },
  twoColumnSection: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  column: {
    flex: 1
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    fontSize: 9,
  },
  educationItem: {
    marginBottom: 3,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  educationSchool: {
    fontSize: 9,
    color: '#4a4a4a',
  },
  educationPeriod: {
    fontSize: 8.5,
    color: '#666666',
    marginBottom: 1,
  },
  educationDescription: {
     fontSize: 8.5,
     color: '#4a4a4a',
     lineHeight: 1.2,
  },
  certificationItem: {
    marginBottom: 3,
  },
  certificationName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  certificationDate: {
    fontSize: 8.5,
    color: '#666666',
  }
});

const ResumePDF = ({ data, language }) => {
  const sectionTitles = {
    en: {
      summary: 'Professional Summary',
      skills: 'Technical Skills',
      experience: 'Professional Experience',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
      links: 'Professional Links',
      achievements: 'Key Achievements'
    },
    tr: {
      summary: 'Profesyonel Özet',
      skills: 'Teknik Yetenekler',
      experience: 'Profesyonel Deneyim',
      education: 'Eğitim',
      certifications: 'Sertifikalar',
      languages: 'Diller',
      links: 'Profesyonel Bağlantılar',
      achievements: 'Önemli Başarılar'
    }
  }[language];

  const renderPdfDescriptionWithLink = (description) => {
    if (!description) return null;
    const parts = description.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        return (
          <Link key={index} src={match[2]} style={styles.link}>
            <Text>{match[1]}</Text>
          </Link>
        );
      }
      // Ensure even plain text parts are wrapped in a <Text> component if they are rendered directly
      // However, in this context, it will be part of a larger <Text> component, so direct string is fine for concatenation.
      return part; 
    });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{data.personalInfo.name}</Text>
            <Text style={styles.headerSubtitle}>{data.personalInfo.title}</Text>
            <View style={styles.contactInfo}>
              <Link style={styles.link} src={`mailto:${data.personalInfo.email}`}><Text>{data.personalInfo.email}</Text></Link>
              <Text>•</Text>
              <Text>{data.personalInfo.phone}</Text>
              <Text>•</Text>
              <Text>{data.personalInfo.location}</Text>
            </View>
          </View>
        </View>
        {/* Horizontal Line Separator */}
        <View style={styles.headerLine} />

        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionTitles.summary}</Text>
            <Text style={styles.text}>{data.personalInfo.summary}</Text>
          </View>
        )}
        
        {/* About section from data.about - similar to summary but could be longer */}
        {data.about && !data.personalInfo.summary && ( // Show data.about if summary is empty
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionTitles.summary}</Text> {/* Use summary title */}
            <Text style={styles.text}>{data.about}</Text>
          </View>
        )}


        {/* Skills */}
        {data.skills && Object.keys(data.skills).length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionTitles.skills}</Text>
            {Object.entries(data.skills).map(([category, skillsList]) => (
              <View key={category} style={styles.skillCategory}>
                 {/* For a single skills category like "Digital Skills", we might not need to print the category title if it's redundant with sectionTitle */}
                {Object.keys(data.skills).length > 1 && <Text style={styles.skillTitle}>{category}</Text> }
                <View style={styles.skillList}>
                  {skillsList.map((skillItem, index) => (
                    <Text key={index} style={styles.skill}>{skillItem}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionTitles.experience}</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>{exp.period}</Text>
                </View>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                {exp.description && <Text style={[styles.text, { fontSize: 8.5, lineHeight: 1.2, marginBottom: exp.achievements && exp.achievements.length > 0 ? 2 : 0  }]}>{exp.description}</Text>}
                {exp.achievements && exp.achievements.length > 0 && (
                  <View style={styles.achievementList}>
                    {exp.achievements.map((achievement, i) => (
                      <Text key={i} style={styles.achievement}>• {achievement}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
        
        {/* Education and Certifications - possibly side-by-side if space is tight and content allows */}
        <View style={styles.twoColumnSection}>
          {data.education && data.education.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>{sectionTitles.education}</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationSchool}>{edu.school}</Text>
                  <Text style={styles.educationPeriod}>{edu.period}</Text>
                  {edu.description && <Text style={styles.educationDescription}>{edu.description}</Text>}
                </View>
              ))}
            </View>
          )}

          {data.certifications && data.certifications.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>{sectionTitles.certifications}</Text>
              {data.certifications.map((cert, index) => (
                <View key={index} style={styles.certificationItem}>
                  <Text style={styles.certificationName}>{cert.name}</Text>
                  {(cert.issuer || cert.date) && <Text style={styles.certificationDate}>
                    {cert.issuer}{cert.issuer && cert.date ? ' • ' : ''}{cert.date}
                  </Text>}
                </View>
              ))}
            </View>
          )}
        </View>
        
        {/* Languages & Links - can be combined or kept separate */}
        {/* For simplicity, keeping them separate for now. Can combine into twoColumnSection if needed */}
        
        {data.languages && data.languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionTitles.languages}</Text>
            {data.languages.map((lang, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.text}>{lang.name}</Text>
                <Text style={styles.text}>{lang.proficiency}</Text>
              </View>
            ))}
          </View>
        )}
        
        {/* Volunteer Work (if any) - this could take space, check CV content */}
        {data.volunteerWork && data.volunteerWork.length > 0 && (
           <View style={styles.section}>
             <Text style={styles.sectionTitle}>Volunteer Work</Text> {/* Assuming title from data or add to sectionTitles */}
             {data.volunteerWork.map((work, index) => (
               <View key={index} style={styles.experienceItem}> {/* Reuse experience styling for compactness */}
                 <Text style={styles.experienceTitle}>{work.role} at {work.organization}</Text>
                 <Text style={styles.experienceDate}>{work.period}</Text>
                 {work.description && 
                   <Text style={[styles.text, { fontSize: 8.5, lineHeight: 1.2 }]}>
                     {renderPdfDescriptionWithLink(work.description)}
                   </Text>
                 }
               </View>
             ))}
           </View>
        )}

        {data.socialLinks && data.socialLinks.length > 0 && (
          <View style={styles.section}>
            {/* <Text style={styles.sectionTitle}>{sectionTitles.links}</Text> */}{/* Title removed as per user request */}
            <View style={{ flexDirection: 'row', gap: 10, marginTop: styles.sectionTitle ? 0 : 10 /* Add margin if title was there */ }}>
            {data.socialLinks.map((item, index) => (
              <Link key={index} style={styles.link} src={item.url}>
                <Text>{item.platform}</Text>
              </Link>
            ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;