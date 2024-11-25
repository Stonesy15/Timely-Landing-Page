import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Operation from '../components/Operation';
import Warehouse from '../components/Warehouse';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="operation">
          <Operation />
        </section>
        <Warehouse />
      </main>
      <Footer />
    </div>
  );
}

export default Home;