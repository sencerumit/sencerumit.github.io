import articlesData from '../config/articlesData';
import { marked } from 'marked';

export async function getArticleBySlug(slug, language = 'en') {
  try {
    const article = articlesData.find(article => {
      const baseSlug = article.slug;
      const translatedSlug = language !== 'en' && article.translations?.[language]?.slug;
      if (language === 'en') {
        return baseSlug === slug || article.id === parseInt(slug);
      } else {
        // Match against translated slug if available, otherwise base slug
        return (translatedSlug && translatedSlug === slug) || baseSlug === slug || article.id === parseInt(slug);
      }
    });

    if (!article) {
      return null;
    }

    // Process markdown content to HTML
    const processedContent = article.content ? marked(article.content) : '';

    // If language is not English and translations exist, merge them with the base article
    const translatedData = language !== 'en' && article.translations?.[language]
      ? {
          ...article,
          content: processedContent,
          ...article.translations[language],
          author: {
            ...article.author,
            ...(article.translations[language].author || {}),
          }
        }
      : { ...article, content: processedContent };

    // Determine the correct slug for path generation
    const resolvedSlugForPath = (language !== 'en' && article.translations?.[language]?.slug) 
      ? article.translations[language].slug 
      : article.slug;

    // Load the markdown path based on language and resolved slug
    const markdownPath = language === 'en' 
      ? `/content/articles/en/${resolvedSlugForPath}.md`
      : `/content/articles/${language}/${resolvedSlugForPath}.md`;

    return {
      ...translatedData,
      language,
      markdownPath
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function getAllArticles(language = 'en') {
  try {
    // Return all articles with translations applied if available and content processed
    return articlesData.map(article => {
      // Process markdown content to HTML
      const processedContent = article.content ? marked(article.content) : '';

      const translatedData = language !== 'en' && article.translations?.[language]
        ? {
            ...article,
            content: processedContent,
            ...article.translations[language],
            author: {
              ...article.author,
              ...(article.translations[language].author || {}),
            }
          }
        : { ...article, content: processedContent };

      // Determine the correct slug for path generation
      const resolvedSlugForPath = (language !== 'en' && article.translations?.[language]?.slug) 
        ? article.translations[language].slug 
        : article.slug;

      // Add the correct markdown path based on language and resolved slug
      const markdownPath = language === 'en'
        ? `/content/articles/en/${resolvedSlugForPath}.md`
        : `/content/articles/${language}/${resolvedSlugForPath}.md`;

      return {
        ...translatedData,
        language,
        markdownPath
      };
    });
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
} 