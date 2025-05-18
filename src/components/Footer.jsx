import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-royalBlue text-white py-6 animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 My Business. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;