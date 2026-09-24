import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { ScrollToTop } from './components/ScrollToTop';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState<string | undefined>();
  const [calcPriceEstimate, setCalcPriceEstimate] = useState<number | undefined>();

  const handleOpenBooking = (serviceName?: string, priceEstimate?: number) => {
    setSelectedServiceName(serviceName);
    setCalcPriceEstimate(priceEstimate);
    setIsBookingOpen(true);
  };

  const handleSelectEstimate = (summary: string, price: number) => {
    setSelectedServiceName(summary);
    setCalcPriceEstimate(price);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-zinc-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ed2503] selection:text-white flex flex-col justify-between">
        <div>
          {/* Navigation */}
          <Navbar onOpenBooking={handleOpenBooking} />

          {/* Main Multi-Page Router */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/o-nas" element={<AboutPage />} />
              <Route path="/sluzby" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/kalkulacka" element={<CalculatorPage onSelectEstimate={handleSelectEstimate} />} />
              <Route path="/ukazky" element={<BeforeAfterPage />} />
              <Route path="/recenzie" element={<ReviewsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />

        {/* Floating Call Widget */}
        <FloatingCallButton onOpenBooking={handleOpenBooking} />

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          selectedServiceName={selectedServiceName}
          calcPriceEstimate={calcPriceEstimate}
        />
      </div>
    </BrowserRouter>
  );
}
