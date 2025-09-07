
import React, { useState } from 'react';

const AppointmentPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        carDetails: '',
        serviceType: '',
        date: '',
        time: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<typeof formData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.carDetails) newErrors.carDetails = 'Car details are required';
        if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.time) newErrors.time = 'Time is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <div className="bg-white dark:bg-dark-card p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-primary dark:text-accent mb-4">Thank You!</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Your appointment request has been received. We will send a confirmation to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300"
                    >
                        Book Another Appointment
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-secondary dark:text-white">Book an Appointment</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Schedule your service with our expert technicians. It's fast, easy, and convenient.
                </p>
            </div>
            <div className="max-w-3xl mx-auto bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.name ? 'border-red-500' : ''}`} />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.email ? 'border-red-500' : ''}`} />
                             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.phone ? 'border-red-500' : ''}`} />
                             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="carDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Car (Make, Model, Year)</label>
                            <input type="text" name="carDetails" id="carDetails" value={formData.carDetails} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.carDetails ? 'border-red-500' : ''}`} />
                             {errors.carDetails && <p className="text-red-500 text-xs mt-1">{errors.carDetails}</p>}
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Service Type</label>
                            <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.serviceType ? 'border-red-500' : ''}`}>
                                <option value="">Select a service...</option>
                                <option>Oil Change</option>
                                <option>Brake Inspection</option>
                                <option>Tire Rotation</option>
                                <option>Engine Diagnostic</option>
                                <option>Full Maintenance</option>
                            </select>
                             {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Date</label>
                            <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.date ? 'border-red-500' : ''}`} />
                             {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Time</label>
                            <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-secondary dark:border-gray-600 ${errors.time ? 'border-red-500' : ''}`} />
                             {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                        </div>
                    </div>
                    <div className="mt-8 text-right">
                        <button type="submit" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300">
                            Request Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentPage;
