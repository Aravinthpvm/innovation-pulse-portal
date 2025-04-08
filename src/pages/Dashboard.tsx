
import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSection from '@/components/DashboardSection';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <DashboardSection />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
