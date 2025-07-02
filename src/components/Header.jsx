// src/components/Header.js
import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center">
          <img src='/assets/logo.png' className="h-12 w-12 text-yellow-500" />
          <span className="ml-2 text-2xl font-bold">MUSCLE HEADQUARTER</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#features" className="hover:text-yellow-500">About</a>
          <a href="#membership" className="hover:text-yellow-500">Membership</a>
          <a href="#classes" className="hover:text-yellow-500">Classes</a>
          <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TRANSFORM YOUR BODY
            <span className="block text-yellow-500">TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the ultimate fitness experience where strength meets community.
            Start your journey today with our expert trainers and state-of-the-art facilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
              JOIN NOW
            </button>
            <button className="border-2 border-yellow-500 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition">
              FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;