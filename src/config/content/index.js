import { articlesEn } from './en/articles';
import { articlesTr } from './tr/articles';
import { resumeDataEn } from './en/resume';
import { resumeDataTr } from './tr/resume';
import { translationsEn } from './en/translations';
import { translationsTr } from './tr/translations';

export const content = {
  en: {
    articles: articlesEn,
    resume: resumeDataEn,
    translations: translationsEn
  },
  tr: {
    articles: articlesTr,
    resume: resumeDataTr,
    translations: translationsTr
  }
};

export default content; 