// src/components/Contact.js
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          GET IN <span className="text-yellow-500">TOUCH</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
                <MapPin className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400">1st Floor, Behind SS Banquet Hall, Matiala, New Delhi - 110059</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
                <Phone className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400">+91 (XXX) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
                <Mail className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400">info@muscleheadquarter.com</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-black p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-black p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-black p-3 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-600 transform hover:scale-[1.02] transition-all">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;