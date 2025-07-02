// src/data.js
import { Dumbbell, Users, Clock, Trophy } from 'lucide-react';

export const features = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art facilities for optimal training',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Professional guidance for your fitness journey',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train anytime that suits your schedule',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Achieve your fitness goals with our program',
  },
];

export const galleryImages = [
  {
    image: "/assets/gym1.jpg",
    title: "Modern Training Equipment"
  },
  {
    image: "/assets/gym2.jpg",
    title: "Separate Changing Rooms"
  },
  {
    image: "/assets/gym3.jpg",
    title: "Spacious Workout Areas"
  },
  {
    image: "/assets/gym4.jpg",
    title: "Beautiful Ambience"
  },
];

export const plans = [
  {
    name: 'BASIC',
    price: 29,
    features: ['Access to Gym Floor', 'Basic Equipment Usage', 'Locker Room Access', 'Free Wifi'],
    isPremium: false,
  },
  {
    name: 'PREMIUM',
    price: 49,
    features: ['All Basic Features', 'Group Classes', 'Personal Trainer (2x/month)', 'Nutrition Consultation'],
    isPremium: true,
  },
  {
    name: 'ELITE',
    price: 79,
    features: ['All Premium Features', 'Unlimited Personal Training', 'Recovery Room Access', 'VIP Locker Room'],
    isPremium: false,
  },
];

export const classes = [
  {name :'Strength Training', image: '/assets/Strength Training.jpg'},
  {name : 'Cardio Blast', image: '/assets/Cardio.jpg'},
  {name : 'Yoga Flow', image: '/assets/Yoga.jpg'},
  {name : 'HIIT', image: '/assets/HIIT.jpg'},
  {name : 'Boxing', image: '/assets/Boxing.jpg'},
  {name : 'CrossFit', image: '/assets/Crossfit.jpg'}
];