import React from 'react';
import Card1 from '../components/Card1';
import NewArrivals from '../components/NewArrivals';
import ExploreSection from '../components/ExploreSection';
import NewArrivalsSection from '../components/NewArrivalsSection';

const Home = () => {
  return (
    <div>
      <Card1 />
      <NewArrivals />
      <ExploreSection />
      <NewArrivalsSection />
    </div>
  );
};

export default Home;
