'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CreateCardPage() {
    return (
        <Suspense>
            <CreateCardPageContent />
        </Suspense>
    );
}

function CreateCardPageContent() {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get('service');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [cardGenerated, setCardGenerated] = useState(false);

    // Define the type for card data
    interface CardData {
        id: string;
        name: string;
        email: string;
        phone: string;
        service: string;
        discount: string;
        expiryDate: string;
        issueDate: string;
    }

    const [cardData, setCardData] = useState<CardData | null>(null);

    // Sample service data - in a real app, this would be fetched from an API
    const service = {
        id: serviceId || '1',
        name: 'Luxury Hotel Stay',
        discount: '30%',
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 30 days from now
        image: '/images/hotel-luxury.jpg',
        description: 'Experience 5-star luxury accommodations with exclusive amenities'
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Generate a unique card ID
        const cardId = Math.random().toString(36).substring(2, 10).toUpperCase();

        // Create card data
        const newCardData = {
            id: cardId,
            ...formData,
            service: service.name,
            discount: service.discount,
            expiryDate: service.expiryDate,
            issueDate: new Date().toLocaleDateString(),
        };

        setCardData(newCardData);
        setCardGenerated(true);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Create Your Digital Discount Card</h1>

                {!cardGenerated ? (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8 mb-8">
                                <div className="md:w-1/3">
                                    <div className="h-48 bg-gray-300 rounded-lg relative">
                                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
                                            {service.discount} OFF
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-700">Discount: <span className="font-semibold text-blue-600">{service.discount}</span></p>
                                        <p className="text-sm text-gray-700">Valid until: <span className="font-semibold">{service.expiryDate}</span></p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <h3 className="text-xl font-semibold mb-4">Your Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Confirm & Get Card
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 md:p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-semibold text-green-600 mb-2">Your Digital Card is Ready!</h2>
                                <p className="text-gray-600">Present this card to the service provider to avail your discount</p>
                            </div>

                            <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl overflow-hidden shadow-lg mb-8">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Best Buyer</h3>
                                            <p className="text-sm opacity-80">Discount Card</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold">{service.discount}</p>
                                            <p className="text-sm opacity-80">OFF</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm opacity-80">Cardholder</p>
                                        <p className="font-semibold">{cardData?.name}</p>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm opacity-80">Service</p>
                                        <p className="font-semibold">{service.name}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-sm opacity-80">Card ID</p>
                                            <p className="font-mono font-semibold">{cardData?.id}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm opacity-80">Valid Until</p>
                                            <p className="font-semibold">{service.expiryDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 flex justify-center">
                                    <div className="bg-gray-200 w-32 h-32 flex items-center justify-center">
                                        <p className="text-gray-500 text-xs text-center">QR Code Placeholder</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Save Card as Image
                                </button>
                                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>
                                    Share Card
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <Link href="/services" className="text-blue-600 hover:underline">
                        ← Back to Services
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}