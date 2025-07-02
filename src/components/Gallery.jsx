import React, { useState } from 'react';
import { X } from "lucide-react"; // Importing the close icon
import { galleryImages } from '../data';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          OUR <span className="text-yellow-500">GALLERY</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.image} 
                alt={image.title} 
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                  {image.title} {/* FIXED: using image.title instead of classItem.title */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={`${selectedImage}?auto=format&fit=crop&w=1200&q=80`} // FIXED: Correct JSX string interpolation
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
