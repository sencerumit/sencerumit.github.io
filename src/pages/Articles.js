import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../utils/markdownLoader';
import { useLanguage } from '../contexts/LanguageContext';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    let mounted = true;

    async function loadArticles() {
      try {
        const articlesData = await getAllArticles(language);
        if (mounted) {
          setArticles(articlesData);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(t('articles.error'));
          setLoading(false);
        }
      }
    }

    loadArticles();
    return () => {
      mounted = false;
    };
  }, [language, t]);

  const memoizedArticles = useMemo(() => articles, [articles]);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <div className="text-nier-dark">{t('articles.loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 px-2 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-nier-dark section-title">{t('articles.title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {memoizedArticles.map((article) => (
          <article
            key={`${article.id}-${language}`}
            className="bg-white bg-opacity-20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-nier/20 min-w-0"
          >
            <Link to={`/articles/${article.slug}`} className="block">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-nier-dark mb-2 gap-1 md:gap-0">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-nier-dark">{article.title}</h2>
                <p className="text-nier-dark mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-avatar.jpg';
                      }}
                    />
                    <span className="text-sm text-nier-dark">{article.author.name}</span>
                  </div>
                  <span className="text-nier-accent hover:text-nier-accent-hover transition-colors duration-200 font-semibold inline-flex items-center">
                    {t('articles.readMore')} <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Articles;