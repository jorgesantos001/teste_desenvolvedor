import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card1 from './components/Card1';
import NewArrivals from './components/NewArrivals';
import ExploreSection from './components/ExploreSection';
import NewArrivalsSection from './components/NewArrivalsSection';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Card1 />
        <NewArrivals />
        <ExploreSection />
        <NewArrivalsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
