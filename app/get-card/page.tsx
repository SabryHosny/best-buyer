'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GetCardPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Function to handle WhatsApp redirect
    const handleWhatsAppChat = () => {
        // Format the message with user information
        const message = `Hello! I would like to get a discount card. My details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;

        // Create WhatsApp URL with the message
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-black text-gold py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-300">Get Your Discount Card</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300">Fill in your details and chat with us on WhatsApp to receive your personal discount card</p>
                </div>
            </div>

            {/* Form Section */}
            <section className="py-16 px-4">
                <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-amber-300">Your Information</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-amber-400 focus:border-amber-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-amber-400 focus:border-amber-400"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-amber-400 focus:border-amber-400"
                            required
                        />
                    </div>

                    <button
                        onClick={handleWhatsAppChat}
                        className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Continue on WhatsApp
                    </button>

                    <div className="mt-6 text-center text-gray-400">
                        <p>We&apos;ll send your personal discount card details via WhatsApp</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-amber-300">Benefits of Your Discount Card</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
                            <div className="text-amber-300 text-4xl font-bold mb-2">50%</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Save Up To 50%</h3>
                            <p className="text-gray-400">Get exclusive discounts on a wide range of travel and tourism services</p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
                            <div className="text-amber-300 text-4xl font-bold mb-2">24/7</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Instant Support</h3>
                            <p className="text-gray-400">Our customer support team is available around the clock via WhatsApp</p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
                            <div className="text-amber-300 text-4xl font-bold mb-2">100+</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Partner Network</h3>
                            <p className="text-gray-400">Access discounts from our extensive network of quality service providers</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}