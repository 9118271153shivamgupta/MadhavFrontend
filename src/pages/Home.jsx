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
      <div className="layout-wrapper py-12 text-center text-text-muted text-xs sm:text-sm font-medium">
        MadhavFrontend College Intelligence Dashboard Engine &bull; Academic Portal 2026
      </div>
      
    </div>
  );
};

export default Home;