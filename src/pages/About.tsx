import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-red-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Timely</h1>
            <p className="text-xl max-w-2xl">
              Leading the way in innovative logistics solutions with a commitment to excellence
              and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Target className="w-12 h-12 text-red-500 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide exceptional logistics services that empower businesses to thrive
                  in the global marketplace through innovative solutions, reliability, and
                  customer-focused operations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <Award className="w-12 h-12 text-red-500 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the most trusted and innovative logistics partner, setting industry
                  standards for service excellence and sustainable transportation solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  We prioritize our customers' needs and strive to exceed their expectations.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We pursue excellence in everything we do, from operations to customer service.
                </p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to improve our services and operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;