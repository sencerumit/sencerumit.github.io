import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../utils/markdownLoader';
import { useLanguage } from '../contexts/LanguageContext';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    async function loadArticle() {
      try {
        const articleData = await getArticleBySlug(slug, language);
        if (!articleData) {
          setError(t('articles.notFound'));
        } else {
          setArticle(articleData);
        }
        setLoading(false);
      } catch (err) {
        setError(t('articles.error'));
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug, language, t]);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <div className="text-nier-dark">{t('articles.loading')}</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-nier-dark">{t('articles.notFound')}</h1>
        <Link to="/articles" className="text-nier-accent hover:text-nier-accent-hover">
          {t('articles.backToArticles')}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <Link to="/articles" className="text-nier-accent hover:text-nier-accent-hover mb-6 inline-block">
        {t('articles.backToArticles')}
      </Link>
      <article className="bg-white bg-opacity-20 rounded-lg overflow-hidden shadow-lg border border-nier/20">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full mr-3"
                onError={(e) => {
                  e.target.src = '/images/placeholder-avatar.jpg';
                }}
              />
              <div>
                <h3 className="text-nier-dark font-semibold">{article.author.name}</h3>
                <p className="text-sm text-nier-dark/60">{article.author.bio}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-nier-dark">{article.date}</div>
              <div className="text-sm text-nier-dark/60">{article.readTime}</div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-nier-dark">{article.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-nier-mono border border-nier-border/50 
                         text-nier-dark/70 bg-nier-light/30 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div 
            className="prose prose-lg max-w-none text-nier-dark"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </div>
  );
}

export default ArticleDetail; 