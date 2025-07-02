// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src='/assets/logo.png' className="h-12 w-12 text-yellow-500" />
              <span className="ml-2 text-2xl font-bold">Muscle HeadQuarter</span>
            </div>
            <p className="text-gray-400">
              Transform your body and mind with our expert training programs and state-of-the-art facilities.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 5am - 11pm</li>
              <li>Saturday: 6am - 10pm</li>
              <li>Sunday: Close</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-black px-4 rounded-r-lg font-bold hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2023 Muscle HeadQuarter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;