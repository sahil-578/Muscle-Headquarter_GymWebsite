// src/components/Membership.js
import React from 'react';
import { plans } from '../data';

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`bg-${plan.isPremium ? 'yellow-500 text-black' : 'gray-900'} rounded-lg p-8 text-center ${
        plan.isPremium ? 'transform scale-105' : ''
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
      <div className={`text-${plan.isPremium ? 'black' : 'yellow-500'} text-4xl font-bold mb-4`}>
        ${plan.price}<span className="text-lg">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        className={`w-full ${plan.isPremium ? 'bg-black text-yellow-500' : 'bg-yellow-500 text-black'} py-3 rounded-full font-bold hover:${
          plan.isPremium ? 'bg-gray-900' : 'bg-yellow-600'
        } transition`}
      >
        CHOOSE PLAN
      </button>
    </div>
  );
};

const Membership = () => {
  return (
    <section id="membership" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          MEMBERSHIP <span className="text-yellow-500">PLANS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;