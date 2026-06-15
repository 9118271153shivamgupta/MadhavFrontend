import React from 'react';
import HeroSearch from '../components/herosection/HeroSearch';
import StatsBanner from '../components/herosection/StatsBanner';
import TopCities from '../components/herosection/TopCities';
import HomeCourseComponent from '../components/HomeCourseComponent';
import PartnerUniversities from '../components/PartnerUniversities';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bg-main text-text-main transition-colors duration-300 animate-in fade-in duration-500">
      
      {/* Complete Combined Modular Hero Block Assembly */}
      <HeroSearch />
      {/* <StatsBanner /> */}
      {/* <TopCities /> */}
      <HomeCourseComponent/>
      <PartnerUniversities />

      {/* Secondary Main Page Feature Layout Content block below */}
      
      
    </div>
  );
};

export default Home;