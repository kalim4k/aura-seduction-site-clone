
import React from 'react';
import TikAfriqueHero from '../components/tikafrique/TikAfriqueHero';
import TikAfriqueVideo from '../components/tikafrique/TikAfriqueVideo';
import TikAfriqueFeatures from '../components/tikafrique/TikAfriqueFeatures';
import TikAfriqueComments from '../components/tikafrique/TikAfriqueComments';
import TikAfriquePurchase from '../components/tikafrique/TikAfriquePurchase';

const TikAfrique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <TikAfriqueHero />
      <TikAfriqueVideo />
      <TikAfriqueFeatures />
      <TikAfriqueComments />
      <TikAfriquePurchase />
    </div>
  );
};

export default TikAfrique;
