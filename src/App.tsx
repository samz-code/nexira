// src/App.tsx
import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from '@/pages/Home';
import { NexiraProductions } from '@/pages/ecosystem/NexiraProductions';
import { NexiraMedia } from '@/pages/ecosystem/NexiraMedia';
import { NexiraFarms } from '@/pages/ecosystem/NexiraFarms';
import { HorizonSeekers } from '@/pages/ecosystem/HorizonSeekers';
import { NexiraEvents } from '@/pages/ecosystem/NexiraEvents';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ecosystem/productions"
            element={
              <CompanyRoute>
                <NexiraProductions />
              </CompanyRoute>
            }
          />
          <Route
            path="/ecosystem/media"
            element={
              <CompanyRoute>
                <NexiraMedia />
              </CompanyRoute>
            }
          />
          <Route
            path="/ecosystem/farms"
            element={
              <CompanyRoute>
                <NexiraFarms />
              </CompanyRoute>
            }
          />
          <Route
            path="/ecosystem/horizon"
            element={
              <CompanyRoute>
                <HorizonSeekers />
              </CompanyRoute>
            }
          />
          <Route
            path="/ecosystem/events"
            element={
              <CompanyRoute>
                <NexiraEvents />
              </CompanyRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <FloatingWhatsApp />
      </BrowserRouter>
    </HelmetProvider>
  );
}

function CompanyRoute({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}