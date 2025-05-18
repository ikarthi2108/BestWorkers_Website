import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-700 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">"Amazing service! Our business has grown significantly since partnering with them."</p>
            <p className="font-semibold">Jane Doe, CEO</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">"Their support team is top-notch and always available."</p>
            <p className="font-semibold">John Smith, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;