import React from 'react';

const WorkingModal = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-700 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="text-gray-700 dark:text-gray-300">Sign up and explore our services tailored to your needs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="text-gray-700 dark:text-gray-300">Engage with our team to customize your solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="text-gray-700 dark:text-gray-300">Launch your project and see the results!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingModal;