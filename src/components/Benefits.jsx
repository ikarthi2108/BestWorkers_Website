import React from 'react';

const Benefits = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <li className="flex items-start">
            <span className="text-royalBlue text-2xl mr-2">✔</span>
            <p className="text-gray-700 dark:text-gray-300">Increased efficiency with streamlined processes.</p>
          </li>
          <li className="flex items-start">
            <span className="text-royalBlue text-2xl mr-2">✔</span>
            <p className="text-gray-700 dark:text-gray-300">Cost-effective solutions tailored to your budget.</p>
          </li>
          <li className="flex items-start">
            <span className="text-royalBlue text-2xl mr-2">✔</span>
            <p className="text-gray-700 dark:text-gray-300">24/7 support for all your needs.</p>
          </li>
          <li className="flex items-start">
            <span className="text-royalBlue text-2xl mr-2">✔</span>
            <p className="text-gray-700 dark:text-gray-300">Scalable services to grow with your business.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;