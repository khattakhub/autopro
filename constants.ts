import React from 'react';
import type { BlogPost, Service, Testimonial, Tool, ServicePlan } from './types';

// FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
const CalculatorIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm2.25-4.5h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm2.25-4.5h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008ZM8.25 6h7.5v.008H8.25V6ZM12 2.25c-5.186 0-9.443 4.02-9.75 9 .292 4.496 4.01 8.25 8.25 8.25h.019c4.24 0 7.957-3.754 8.25-8.25-.307-4.98-4.564-9-9.769-9Z" }));
const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.495-2.495a1.125 1.125 0 0 1 1.591 0l3.982 3.982a1.125 1.125 0 0 1 0 1.591l-2.495 2.495m-5.877-5.877-2.495-2.495a1.125 1.125 0 0 0-1.591 0l-3.982 3.982a1.125 1.125 0 0 0 0 1.591l2.495 2.495m-5.877-5.877-2.495 2.495" }));
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" }));
const BanknotesIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18v-.008Zm-12 0h.008v.008H6v-.008Z" }));
const FuelIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5h1.5m1.5 0v-1.875a3.375 3.375 0 0 1 3.375-3.375h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5A3.375 3.375 0 0 1 17.625 7.5h1.5m-7.5 0h7.5" }));
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }));


export const HOME_SERVICES: Service[] = [
  {
    icon: React.createElement(WrenchScrewdriverIcon, { className: "w-12 h-12 text-primary dark:text-accent" }),
    title: 'Expert Maintenance',
    description: 'Keep your car running smoothly with our certified technicians and state-of-the-art equipment.',
  },
  {
    icon: React.createElement(BanknotesIcon, { className: "w-12 h-12 text-primary dark:text-accent" }),
    title: 'Flexible Financing',
    description: 'We offer competitive financing options to help you get the car of your dreams.',
  },
  {
    icon: React.createElement(ShieldCheckIcon, { className: "w-12 h-12 text-primary dark:text-accent" }),
    title: 'Comprehensive Insurance',
    description: 'Protect your investment with our tailored insurance plans for complete peace of mind.',
  },
];

export const ALL_TOOLS: Tool[] = [
  {
    id: 'car-loan-calculator',
    title: 'Car Loan Calculator',
    description: 'Estimate your monthly car loan payments quickly and easily.',
    icon: React.createElement(CalculatorIcon, { className: "w-8 h-8 text-primary dark:text-accent" }),
  },
  {
    id: 'fuel-cost-estimator',
    title: 'Fuel Cost Estimator',
    description: 'Calculate the fuel cost for your trip based on distance and vehicle mileage.',
    icon: React.createElement(FuelIcon, { className: "w-8 h-8 text-primary dark:text-accent" }),
  },
  {
    id: 'maintenance-schedule-generator',
    title: 'Maintenance Schedule',
    description: 'Get a personalized maintenance schedule for your vehicle.',
    icon: React.createElement(ClockIcon, { className: "w-8 h-8 text-primary dark:text-accent" }),
  },
  {
    id: 'resale-value-estimator',
    title: 'Resale Value Estimator',
    description: 'Find out the estimated resale value of your car in today\'s market.',
    icon: React.createElement(BanknotesIcon, { className: "w-8 h-8 text-primary dark:text-accent" }),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The service at AutoPro is unmatched. They handled my car\'s issues with professionalism and speed. Highly recommended!',
    name: 'Sarah Johnson',
    role: 'Loyal Customer',
    avatar: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: 'I used their loan calculator and it was incredibly helpful in planning my budget. The transparency is amazing.',
    name: 'Michael Chen',
    role: 'First-time Buyer',
    avatar: 'https://picsum.photos/id/238/100/100',
  },
  {
    quote: 'Booking an appointment was a breeze, and the staff was friendly and knowledgeable. I\'ll definitely be back.',
    name: 'Emily Rodriguez',
    role: 'Busy Professional',
    avatar: 'https://picsum.photos/id/239/100/100',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '10-essential-car-maintenance-tips',
    title: '10 Essential Car Maintenance Tips for Beginners',
    excerpt: 'Keep your vehicle in top shape with these simple yet effective maintenance tips that every car owner should know...',
    imageUrl: 'https://picsum.photos/seed/car1/800/600',
    author: 'John Doe',
    date: 'October 26, 2023',
    content: `
      <p class="mb-4">Maintaining your car is crucial for its longevity and your safety. Here are 10 essential tips to get you started:</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Check Your Tire Pressure Regularly:</strong> Proper tire pressure improves fuel efficiency and handling.</li>
        <li><strong>Change Your Oil and Oil Filter:</strong> Follow your manufacturer's recommended schedule to keep your engine healthy.</li>
        <li><strong>Inspect Your Brakes:</strong> Listen for any squeaking or grinding noises and get them checked immediately.</li>
        <li><strong>Test Your Lights:</strong> Regularly check your headlights, taillights, and turn signals.</li>
        <li><strong>Replace Wiper Blades:</strong> Don't wait for a downpour to realize your wipers are worn out.</li>
        <li><strong>Check Your Battery:</strong> Look for corrosion on the terminals and ensure connections are tight.</li>
        <li><strong>Inspect Hoses and Belts:</strong> Cracks or frays can lead to serious engine problems.</li>
        <li><strong>Top Off Fluids:</strong> Regularly check your coolant, power steering, and washer fluids.</li>
        <li><strong>Change Your Air Filter:</strong> A clean air filter improves engine performance and fuel economy.</li>
        <li><strong>Keep It Clean:</strong> Washing and waxing your car protects the paint and prevents rust.</li>
      </ol>
      <p>By following these simple tips, you can save money on costly repairs and enjoy a safer, more reliable ride.</p>
    `
  },
  {
    slug: 'how-to-choose-the-right-car-insurance',
    title: 'How to Choose the Right Car Insurance for You',
    excerpt: 'Navigating the world of car insurance can be confusing. This guide breaks down what you need to look for...',
    imageUrl: 'https://picsum.photos/seed/car2/800/600',
    author: 'Jane Smith',
    date: 'October 22, 2023',
    content: `
      <p class="mb-4">Choosing the right car insurance is a critical decision. Here’s a breakdown of what to consider:</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Types of Coverage</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Liability Coverage:</strong> Covers damages to others if you're at fault. Usually required by law.</li>
        <li><strong>Collision Coverage:</strong> Pays for damage to your car from an accident.</li>
        <li><strong>Comprehensive Coverage:</strong> Covers damage from non-collision events like theft, fire, or weather.</li>
        <li><strong>Uninsured/Underinsured Motorist Coverage:</strong> Protects you if you're hit by a driver with little or no insurance.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Factors Affecting Your Premium</h3>
      <p>Your age, driving record, vehicle type, and even your credit score can impact your insurance rates. It pays to shop around and compare quotes from multiple providers to find the best deal for your needs.</p>
    `
  },
  {
    slug: 'the-future-of-electric-vehicles',
    title: 'The Future is Electric: What to Expect from EVs',
    excerpt: 'Electric vehicles are revolutionizing the auto industry. Discover the latest trends and what the future holds...',
    imageUrl: 'https://picsum.photos/seed/car3/800/600',
    author: 'Alex Ray',
    date: 'October 18, 2023',
    content: `
      <p class="mb-4">The automotive landscape is shifting rapidly towards electrification. With advancements in battery technology, charging infrastructure, and autonomous driving, the future of mobility is exciting.</p>
      <p>Expect to see longer ranges, faster charging times, and a wider variety of electric models, from compact cars to heavy-duty trucks. As technology matures and costs come down, EVs are set to become the new standard for personal transportation.</p>
    `
  },
    {
    slug: 'understanding-your-cars-dashboard-lights',
    title: 'Understanding Your Car\'s Dashboard Lights',
    excerpt: 'Those little warning lights can be intimidating. Learn what the most common dashboard symbols mean and what you should do...',
    imageUrl: 'https://picsum.photos/seed/car4/800/600',
    author: 'John Doe',
    date: 'October 15, 2023',
    content: `
      <p class="mb-4">Your car's dashboard is a vital communication tool. Here's a quick guide to some common warning lights:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Check Engine Light:</strong> Could be anything from a loose gas cap to a serious engine issue. Get it checked.</li>
        <li><strong>Oil Pressure Warning:</strong> Pull over safely and turn off the engine immediately. Low oil pressure can cause severe damage.</li>
        <li><strong>Battery/Charging Alert:</strong> Indicates a problem with the battery or charging system.</li>
        <li><strong>Tire Pressure Monitoring System (TPMS):</strong> One or more of your tires is significantly under-inflated.</li>
      </ul>
      <p>Never ignore a warning light. Consult your owner's manual and see a professional if you're unsure.</p>
    `
  }
];

export const SERVICE_PLANS: ServicePlan[] = [
  {
    name: 'Basic Care',
    price: '$49/mo',
    features: [
      'Oil Change (2x per year)',
      'Tire Rotation',
      'Basic Inspection',
      'Fluid Top-offs',
    ],
    isPopular: false,
  },
  {
    name: 'Pro Shield',
    price: '$99/mo',
    features: [
      'All Basic Care features',
      'Comprehensive Inspection',
      'Brake Service',
      'Battery Check & Replacement',
      'Priority Scheduling',
    ],
    isPopular: true,
  },
  {
    name: 'Total Assurance',
    price: '$149/mo',
    features: [
      'All Pro Shield features',
      'Full Synthetic Oil',
      'Wheel Alignment',
      'Engine Diagnostics',
      'Roadside Assistance',
    ],
    isPopular: false,
  },
];
