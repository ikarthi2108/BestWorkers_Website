import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-royalBlue text-white px-6 py-3 rounded-full w-full hover:bg-blue-800 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;