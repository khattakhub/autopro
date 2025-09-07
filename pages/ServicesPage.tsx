
import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_SERVICES, SERVICE_PLANS } from '../constants';
import type { Service, ServicePlan } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
        <div className="flex justify-center mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </div>
);

const PricingCard: React.FC<{ plan: ServicePlan }> = ({ plan }) => (
    <div className={`rounded-lg p-8 border ${plan.isPopular ? 'border-primary dark:border-accent shadow-2xl relative' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card'}`}>
        {plan.isPopular && (
            <div className="absolute top-0 -translate-y-1/2 bg-primary dark:bg-accent text-white dark:text-secondary px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="mt-4 text-4xl font-extrabold">{plan.price}</p>
        <ul className="mt-8 space-y-4 text-left">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Link to="/appointment" className={`mt-8 block w-full py-3 px-6 text-center font-semibold rounded-xl transition-colors duration-300 ${plan.isPopular ? 'bg-primary text-white hover:bg-blue-600' : 'bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent hover:bg-primary/20 dark:hover:bg-accent/30'}`}>
            Get Started
        </Link>
    </div>
);


const ServicesPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-secondary dark:text-white">Our Services</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    From routine check-ups to complex repairs, we provide top-tier services to ensure your vehicle performs at its best.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {HOME_SERVICES.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
            
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-secondary dark:text-white">Maintenance Plans</h2>
                 <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Choose a plan that fits your needs and budget for worry-free driving.
                </p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {SERVICE_PLANS.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>

        </div>
    );
};

export default ServicesPage;
