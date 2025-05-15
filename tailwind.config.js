module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nier: {
          light: '#F5F0E8',    // Lighter ivory
          paper: '#E8E0D5',    // Paper color
          DEFAULT: '#A69F95',  // Refined muted brown
          dark: '#3E3A36',     // Warmer dark gray
          accent: '#BFB4A4',   // Softer warm beige
          text: '#2D2A27',     // Warmer almost black
          border: '#D4C9BC',   // Subtle border color
        }
      },
      fontFamily: {
        'nier': ['Marcellus', 'serif'],
        'nier-mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        'fade': 'fade 1.5s ease-in-out infinite alternate',
        'slide': 'slide 0.5s ease-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
        slide: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
} 