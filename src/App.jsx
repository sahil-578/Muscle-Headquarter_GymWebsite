import React from 'react';
import Header from './components/Header.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Membership from './components/Membership.jsx';
import Classes from './components/Classes.jsx';
import Gallery from './components/Gallery.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>
      <Features />
      <Membership />
      <Classes />
      <Gallery/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App;