// src/components/Classes.js
import React from 'react';
import { classes } from '../data';
import { ChevronRight } from 'lucide-react';

const ClassCard = ({ classItem } ) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <img
        // src={`https://source.unsplash.com/800x600/?${className.toLowerCase()}`}
        src={classItem.image}
        alt={classItem.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
        <p className="text-gray-400 mb-4">
          Professional instruction in a motivating group environment.
        </p>
        <button className="flex items-center text-yellow-500 font-bold hover:text-yellow-600">
          LEARN MORE <ChevronRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

const Classes = () => {
  return (
    <section id="classes" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          OUR <span className="text-yellow-500">CLASSES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <ClassCard key={index} classItem={classItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;