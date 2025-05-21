'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function CulturalHistoricPage() {
    const [activeTab, setActiveTab] = useState('overview');

    // Cultural destinations
    const culturalDestinations = [
        {
            id: 'egypt',
            name: 'Egypt',
            description: 'Explore ancient pyramids, temples, and the rich history of pharaonic civilization.',
            imagePath: 'https://images.pexels.com/photos/1738536/pexels-photo-1738536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'italy',
            name: 'Italy',
            description: 'Discover Roman ruins, Renaissance art, and centuries of cultural heritage.',
            imagePath: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'japan',
            name: 'Japan',
            description: 'Experience ancient temples, traditional ceremonies, and unique cultural practices.',
            imagePath: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'peru',
            name: 'Peru',
            description: 'Visit Machu Picchu, explore Incan ruins, and learn about pre-Columbian civilizations.',
            imagePath: 'https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
                        backgroundImage: `url('https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cultural & Historic</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Journey through time and discover the world&apos;s rich cultural heritage</p>
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
                        Cultural Destinations
                    </button>
                    <button
                        onClick={() => setActiveTab('experiences')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'experiences' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Cultural Experiences
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">Immerse Yourself in History and Culture</h2>
                            <p className="text-gray-700">Cultural and historic travel offers a unique opportunity to step back in time and experience the rich tapestry of human civilization. From ancient archaeological sites and architectural wonders to living traditions and vibrant cultural practices, these journeys provide deeper insights into the diverse heritage of our world.</p>

                            <p className="text-gray-700">Our cultural and historic tours are designed to connect you with authentic experiences that go beyond typical tourist attractions. Led by knowledgeable guides and local experts, you&apos;ll gain a deeper understanding of the historical context, cultural significance, and artistic achievements of each destination you visit.</p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                                <h3 className="font-bold text-amber-800">Best Time to Visit</h3>
                                <p className="text-amber-700">Consider visiting during shoulder seasons (spring and fall) when there are fewer crowds at popular historic sites and more comfortable temperatures for exploration.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Cultural Travel Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore UNESCO World Heritage Sites</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit ancient ruins and archaeological sites</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience traditional ceremonies and festivals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Learn about indigenous cultures and traditions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover architectural masterpieces</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Participate in hands-on cultural workshops</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Cultural Journey
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Cultural Destinations</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {culturalDestinations.map((destination) => (
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

                {/* Experiences Content */}
                {activeTab === 'experiences' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Cultural Experiences</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Guided Historic Tours</h3>
                                <p className="text-gray-600">Explore ancient sites, monuments, and museums with expert guides who bring history to life through engaging storytelling.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Cultural Workshops</h3>
                                <p className="text-gray-600">Participate in hands-on activities like traditional cooking classes, craft workshops, or music and dance lessons.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Local Immersion</h3>
                                <p className="text-gray-600">Stay with local families, visit traditional villages, or attend authentic cultural ceremonies and festivals.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Cultural Travel Tips</h2>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Research Local Customs</h4>
                                        <p className="text-gray-600">Learn about appropriate dress codes, greetings, and behaviors to show respect for local traditions and customs.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Learn Basic Phrases</h4>
                                        <p className="text-gray-600">Knowing a few words in the local language can enhance your experience and show respect for the culture.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Hire Local Guides</h4>
                                        <p className="text-gray-600">Local guides provide valuable insights and context that you might miss on your own.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Respect Sacred Sites</h4>
                                        <p className="text-gray-600">Follow guidelines at religious and historic sites, including photography restrictions and dress codes.</p>
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
