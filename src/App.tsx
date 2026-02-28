/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HelpSection from './components/HelpSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <HelpSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
