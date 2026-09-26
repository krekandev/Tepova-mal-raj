import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50/60 text-slate-900 selection:bg-red-600 selection:text-white flex flex-col justify-between antialiased">
        <div>
          {/* Main Navigation */}
          <Navbar />

          {/* Clean Multi-Page Routing */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sluzby" element={<ServicesPage />} />
              <Route path="/o-nas" element={<AboutPage />} />
              <Route path="/recenzie" element={<ReviewsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating Call Widget */}
        <FloatingCallButton />
      </div>
    </BrowserRouter>
  );
}
