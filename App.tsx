import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import ConceptDetail from './pages/ConceptDetail';
import Dreams from './pages/Dreams';
import DreamDetail from './pages/DreamDetail';

// Inner component to access LanguageContext for animation state
const AppContent: React.FC = () => {
  const { isTransitioning } = useLanguage();

  return (
    <div className="font-sans bg-jungLight-bg dark:bg-jungDark-bg text-jungLight-text dark:text-jungDark-text min-h-screen transition-colors duration-500 selection:bg-jung-gold selection:text-white bg-paper-texture dark:bg-dark-texture bg-fixed">
      <MemoryRouter>
        <Navbar />
        {/* Main content wrapper with fade/blur transition */}
        <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/concepts/:id" element={<ConceptDetail />} />
            <Route path="/dreams" element={<Dreams />} />
            <Route path="/dreams/:id" element={<DreamDetail />} />
          </Routes>
          <Footer />
        </div>
      </MemoryRouter>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;