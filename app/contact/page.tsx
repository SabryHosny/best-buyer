'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, this would send the form data to a server
        console.log('Form submitted:', formData);
        setFormSubmitted(true);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Reset submission status after 5 seconds
        setTimeout(() => {
            setFormSubmitted(false);
        }, 5000);
    };

    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-black text-amber-300 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-400">Have questions or need assistance? We&apos;re here to help!</p>
                </div>
            </div>

            {/* Contact Form and Info */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-700 rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-6 text-amber-300">Send Us a Message</h2>

                            {formSubmitted && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                                    Thank you for your message! We&apos;ll get back to you shortly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:ring-amber-300 focus:border-amber-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:ring-amber-300 focus:border-amber-300"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:ring-amber-300 focus:border-amber-300"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={8}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:ring-amber-300 focus:border-amber-300"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-amber-300 text-black rounded-md hover:bg-amber-400 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-amber-300">Contact Information</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-amber-300/10 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-300">Phone</h3>
                                        <p className="text-gray-400">+20 1155538363</p>
                                        <p className="text-gray-400">+20 1009966188</p>
                                        <hr className="my-2 border-gray-600" />
                                        <p className="text-gray-400">+20 1006631686</p>
                                        <p className="text-gray-400">+20 1150107005</p>
                                        <p className="text-gray-400">+20 1150104008</p>
                                        <p className="text-gray-400">+20 1107902151</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-amber-300/10 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-300">Email</h3>
                                        <p className="text-gray-400">info@bestbuyer.com</p>
                                        <p className="text-gray-400">support@bestbuyer.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-amber-300/10 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-300">Address</h3>
                                        <p className="text-gray-400">97 A. Misr Helwan Agricultural Rd,</p>
                                        <p className="text-gray-400">Behind Armed Forces Hospital,</p>
                                        <p className="text-gray-400">Maadi, Cairo, Egypt.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-amber-300/10 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-300">Business Hours</h3>
                                        <p className="text-gray-400">Open from Saturday to Thursday, excluding Friday</p>
                                        <hr className="my-2 border-gray-600" />
                                        <p className="text-gray-400">Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                                        <p className="text-gray-400">Friday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-8 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-amber-300">Find Us on the Map</h2>
                    <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.5281678379965!2d31.32826398696489!3d30.08749743247899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e21f28cf1d7%3A0x30bcfb14f962d52c!2sBaron%20Empain%20Palace!5e0!3m2!1sen!2seg!4v1747236772621!5m2!1sen!2seg"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}