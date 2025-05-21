'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function BeachStayPage() {
    const [activeTab, setActiveTab] = useState('overview');

    // Beach destinations
    const beachDestinations = [
        {
            id: 'maldives',
            name: 'Maldives',
            description: 'Paradise islands with overwater bungalows and crystal-clear lagoons.',
            imagePath: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'bali',
            name: 'Bali',
            description: 'Tropical beaches, lush rice terraces, and vibrant cultural experiences.',
            imagePath: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'caribbean',
            name: 'Caribbean',
            description: 'White sand beaches, turquoise waters, and laid-back island vibes.',
            imagePath: 'https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'greece',
            name: 'Greek Islands',
            description: 'Stunning beaches, whitewashed villages, and Mediterranean charm.',
            imagePath: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Beach Stay</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Relax and unwind on the world&apos;s most beautiful beaches</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Navigation Tabs */}
                <div className="flex overflow-x-auto pb-2 mb-8 border-b">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'overview' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('destinations')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'destinations' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Top Beach Destinations
                    </button>
                    <button
                        onClick={() => setActiveTab('activities')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'activities' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Beach Activities
                    </button>
                    <button
                        onClick={() => setActiveTab('tips')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'tips' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Travel Tips
                    </button>
                </div>

                {/* Overview Content */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Perfect Beach Getaway</h2>
                            <p className="text-gray-700">Beach vacations offer the ultimate escape from everyday life, allowing you to relax, recharge, and reconnect with nature. From the powdery white sands of the Caribbean to the dramatic coastal landscapes of the Mediterranean, beach destinations around the world offer something for every type of traveler.</p>

                            <p className="text-gray-700">Whether you&apos;re seeking a romantic retreat, a family-friendly resort, or an adventure-filled coastal experience, our beach stay packages provide the perfect combination of relaxation and exploration. Enjoy swimming in crystal-clear waters, sunbathing on pristine beaches, and experiencing the unique culture and cuisine of coastal communities.</p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                                <h3 className="font-bold text-blue-800">Best Time to Visit</h3>
                                <p className="text-blue-700">The ideal time for beach vacations varies by destination. Research the dry season for your chosen location to ensure perfect beach weather.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Beach Vacation Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax on pristine sandy beaches</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Swim in crystal-clear waters</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Enjoy water sports and activities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience stunning sunsets</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover underwater marine life</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Savor fresh seafood cuisine</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Beach Vacation
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Beach Destinations</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {beachDestinations.map((destination) => (
                                <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="h-64 relative">
                                        <Image
                                            src={destination.imagePath}
                                            alt={destination.name}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">{destination.name}</h3>
                                        <p className="text-gray-600 mb-4">{destination.description}</p>
                                        <Link
                                            href="/contact"
                                            className="inline-block px-4 py-2 bg-[#e91e63] text-white rounded hover:bg-[#0e3b7c] transition-colors duration-300"
                                        >
                                            Explore Packages
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Activities Content */}
                {activeTab === 'activities' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Beach Activities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Water Sports</h3>
                                <p className="text-gray-600">Try snorkeling, scuba diving, paddleboarding, kayaking, or jet skiing for an adrenaline rush.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Beach Exploration</h3>
                                <p className="text-gray-600">Discover hidden coves, collect seashells, or take long walks along the shoreline.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Relaxation</h3>
                                <p className="text-gray-600">Sunbathe on the beach, enjoy a beachside massage, or read a book under a palm tree.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Beach Vacation Tips</h2>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Pack Essentials</h4>
                                        <p className="text-gray-600">Don&apos;t forget sunscreen, sunglasses, a hat, beach towels, and swimwear. Consider bringing a waterproof phone case and a good book.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Stay Hydrated</h4>
                                        <p className="text-gray-600">The combination of sun, heat, and salt water can lead to dehydration. Drink plenty of water throughout the day.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Research Local Customs</h4>
                                        <p className="text-gray-600">Some beaches have specific rules or cultural expectations. Research local customs before your trip.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Protect Marine Life</h4>
                                        <p className="text-gray-600">Use reef-safe sunscreen and never touch or disturb marine creatures or coral reefs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
