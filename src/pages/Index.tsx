
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DashboardSection from '@/components/DashboardSection';
import InsightsSection from '@/components/InsightsSection';
import AdvocacySection from '@/components/AdvocacySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <InsightsSection />
      <AdvocacySection />
      <Footer />
    </div>
  );
};

export default Index;
