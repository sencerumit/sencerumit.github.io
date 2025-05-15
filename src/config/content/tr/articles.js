export const articlesTr = [
  {
    id: 1,
    slug: 'react-ile-baslangic',
    title: 'React ile Başlangıç',
    excerpt: 'React temellerini öğrenin ve modern web uygulamaları geliştirin.',
    content: `
      React, kullanıcı arayüzleri oluşturmak için güçlü bir JavaScript kütüphanesidir. Bu makalede, temel kavramları ve en iyi uygulamaları keşfedeceğiz.

      ## Temel Kavramlar

      1. Bileşenler
      - React uygulamalarının yapı taşları
      - Yeniden kullanılabilir ve modüler
      - Fonksiyonel veya sınıf tabanlı olabilir

      2. Props
      - Bileşenler arası veri aktarımı
      - Değiştirilemez ve salt okunur
      - Bileşen yeniden kullanılabilirliğini sağlar

      3. State
      - Bileşen verilerini yönetme
      - setState kullanılarak güncellenebilir
      - Değiştiğinde yeniden render tetikler

      ## Başlangıç

      React ile başlamak için Node.js kurulu olmalıdır. Ardından yeni bir proje oluşturmak için:

      \`\`\`bash
      npx create-react-app my-app
      cd my-app
      npm start
      \`\`\`

      Bu, gerekli tüm yapılandırmalarla yeni bir React projesi oluşturacaktır.
    `,
    date: 'Ocak 2024',
    readTime: '5 dakika okuma',
    imageUrl: '/images/react-article.jpg',
    tags: ['React', 'JavaScript', 'Web Geliştirme', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  },
  {
    id: 2,
    slug: 'tailwindcss-gucu',
    title: 'TailwindCSS\'in Gücü',
    excerpt: 'TailwindCSS\'in web geliştirme iş akışınızı nasıl hızlandırabileceğini keşfedin.',
    content: `
      TailwindCSS, geliştirme sürecinizi önemli ölçüde hızlandırabilecek bir utility-first CSS framework'üdür.

      ## Neden TailwindCSS?

      1. Utility-First Yaklaşımı
      - Stilleri doğrudan HTML içinde yazın
      - Dosyalar arası geçiş yok
      - Hızlı prototipleme yetenekleri

      2. Özelleştirme
      - Tamamen özelleştirilebilir tasarım sistemi
      - Varsayılan temayı genişletin veya değiştirin
      - Kendi utility'lerinizi oluşturun

      3. Performans
      - Sadece kullanılan stilleri içerir
      - Daha küçük üretim paketleri
      - Üretim için optimize edilmiş

      ## Başlangıç

      Projenize TailwindCSS'i kurun:

      \`\`\`bash
      npm install tailwindcss
      npx tailwindcss init
      \`\`\`

      tailwind.config.js dosyasında şablon yollarınızı yapılandırın ve başlamaya hazırsınız!
    `,
    date: 'Ocak 2024',
    readTime: '4 dakika okuma',
    imageUrl: '/images/tailwind-article.jpg',
    tags: ['CSS', 'TailwindCSS', 'Web Geliştirme', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  }
]; 