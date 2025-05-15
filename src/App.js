import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects'; // Disabled as per user request
import Contact from './pages/Contact';
// import Articles from './pages/Articles'; // Disabled as per user request
// import ArticleDetail from './pages/ArticleDetail'; // Disabled as per user request
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-nier-light to-nier-paper text-nier-text font-nier">
          <div className="relative z-10">
            <Navbar />
            <div className="container mx-auto px-4 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/projects" element={<Projects />} /> */}{/* Disabled as per user request */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/articles" element={<Articles />} /> */}{/* Disabled as per user request */}
                {/* <Route path="/articles/:slug" element={<ArticleDetail />} /> */}{/* Disabled as per user request */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;