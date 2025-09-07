
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HOME_SERVICES, ALL_TOOLS, TESTIMONIALS, BLOG_POSTS } from '../constants';
import type { Testimonial } from '../types';

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

const ServicesPreview: React.FC = () => (
    <section className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">Our Core Services</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">We offer a wide range of services to meet all your automotive needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {HOME_SERVICES.map((service, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-secondary p-8 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ToolsPreview: React.FC = () => (
    <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">Powerful Automotive Tools</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">Empower your decisions with our suite of free, easy-to-use calculators and estimators.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ALL_TOOLS.slice(0, 4).map((tool) => (
                     <div key={tool.id} className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="mb-4">{tool.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{tool.description}</p>
                        <Link to={`/tools/${tool.id}`} className="mt-4 bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 dark:hover:bg-accent/30 transition-colors duration-300">
                            Use Tool
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                 <Link to="/tools" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300">View All Tools</Link>
            </div>
        </div>
    </section>
);

const TestimonialsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, []);
    
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    const currentTestimonial: Testimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
                <div className="max-w-3xl mx-auto relative">
                    <div className="transition-opacity duration-500 ease-in-out">
                        <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent"/>
                        <p className="text-xl italic mb-4">"{currentTestimonial.quote}"</p>
                        <h3 className="font-bold text-lg text-accent">{currentTestimonial.name}</h3>
                        <p className="text-gray-400">{currentTestimonial.role}</p>
                    </div>
                </div>
                 <div className="flex justify-center mt-8 space-x-2">
                    {TESTIMONIALS.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-accent' : 'bg-gray-500 hover:bg-gray-400'}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};


const BlogPreview: React.FC = () => (
    <section className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">From Our Blog</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">Stay updated with the latest news, tips, and trends in the automotive world.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                     <div key={post.slug} className="bg-gray-50 dark:bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="font-semibold text-primary dark:text-accent hover:underline mt-auto">Read More &rarr;</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <ServicesPreview />
            <ToolsPreview />
            <TestimonialsSlider />
            <BlogPreview />
        </div>
    );
};

export default HomePage;
