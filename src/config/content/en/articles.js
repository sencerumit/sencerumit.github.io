export const articlesEn = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    excerpt: 'Learn the fundamentals of React and how to build modern web applications.',
    content: `
      React is a powerful JavaScript library for building user interfaces. In this article, we'll explore the core concepts and best practices.

      ## Key Concepts

      1. Components
      - Building blocks of React applications
      - Reusable and modular
      - Can be functional or class-based

      2. Props
      - Pass data between components
      - Immutable and read-only
      - Enable component reusability

      3. State
      - Manage component data
      - Can be updated using setState
      - Triggers re-rendering when changed

      ## Getting Started

      To start with React, you'll need Node.js installed. Then you can create a new project using:

      \`\`\`bash
      npx create-react-app my-app
      cd my-app
      npm start
      \`\`\`

      This will set up a new React project with all the necessary configurations.
    `,
    date: 'January 2024',
    readTime: '5 min read',
    imageUrl: '/images/react-article.jpg',
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  },
  {
    id: 2,
    slug: 'power-of-tailwindcss',
    title: 'The Power of TailwindCSS',
    excerpt: 'Discover how TailwindCSS can streamline your web development workflow.',
    content: `
      TailwindCSS is a utility-first CSS framework that can significantly speed up your development process.

      ## Why TailwindCSS?

      1. Utility-First Approach
      - Write styles directly in your HTML
      - No context switching between files
      - Rapid prototyping capabilities

      2. Customization
      - Fully customizable design system
      - Extend or modify default theme
      - Create your own utilities

      3. Performance
      - Only includes used styles
      - Smaller production bundles
      - Optimized for production

      ## Getting Started

      Install TailwindCSS in your project:

      \`\`\`bash
      npm install tailwindcss
      npx tailwindcss init
      \`\`\`

      Configure your template paths in tailwind.config.js and you're ready to go!
    `,
    date: 'January 2024',
    readTime: '4 min read',
    imageUrl: '/images/tailwind-article.jpg',
    tags: ['CSS', 'TailwindCSS', 'Web Development', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  }
]; 