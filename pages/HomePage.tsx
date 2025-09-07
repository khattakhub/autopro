
import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_SERVICES } from '../constants';

const HeroSection: React.FC = () => (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Your Journey, Our Expertise</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">Comprehensive automotive solutions to keep you moving forward. Reliable service, trusted advice.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105">Explore Services</Link>
                <Link to="/appointment" className="bg-accent hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105">Book Now</Link>
            </div>
        </div>
    </div>
);

const AboutSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-4">About AutoPro Connect</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        At AutoPro Connect, we are passionate about cars and dedicated to providing our customers with top-tier service. Our team of certified technicians uses the latest technology to diagnose and repair your vehicle, ensuring it runs at peak performance.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        From routine maintenance to complex repairs and financing solutions, we are your one-stop shop for all things automotive. We believe in transparency, quality, and building lasting relationships with our clients.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img src="https://picsum.photos/seed/about/800/600" alt="Mechanic working on a car" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </div>
    </section>
);


const HighlightsSection: React.FC = () => (
    <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us?</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">We deliver excellence and value in every service we provide.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {HOME_SERVICES.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-secondary p-8 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CtaSection: React.FC = () => (
    <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for an Unmatched Automotive Experience?</h2>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
                Don't wait for a warning light. Schedule your next service or consultation with our experts today and drive with confidence.
            </p>
            <Link to="/appointment" className="bg-accent hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 inline-block">
                Book an Appointment
            </Link>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <HighlightsSection />
            <CtaSection />
        </div>
    );
};

export default HomePage;