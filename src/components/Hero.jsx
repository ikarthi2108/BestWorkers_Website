import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-700 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Find Local Professionals in Tirupur & Coimbatore</h2>
        <p className="text-lg md:text-xl mb-8">Connect with skilled workers for all your service needs</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#register"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Register as Professional
          </a>
          <a
            href="#find"
            className="bg-blue-900 text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Find Workers
          </a>
        </div>
      </div>
    </section>
  );
};


export default Hero;