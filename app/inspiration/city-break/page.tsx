'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function CityBreakPage() {
    const [activeTab, setActiveTab] = useState('overview');

    // City destinations
    const cityDestinations = [
        {
            id: 'paris',
            name: 'Paris',
            description: 'The City of Light offers iconic landmarks, world-class museums, and exquisite cuisine.',
            imagePath: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'newyork',
            name: 'New York',
            description: 'The Big Apple features skyscrapers, Broadway shows, and diverse neighborhoods to explore.',
            imagePath: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'tokyo',
            name: 'Tokyo',
            description: 'Experience the perfect blend of traditional culture and futuristic innovation.',
            imagePath: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'rome',
            name: 'Rome',
            description: 'The Eternal City is home to ancient ruins, Renaissance art, and delicious Italian cuisine.',
            imagePath: 'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
                        backgroundImage: `url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">City Break</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Explore vibrant urban destinations around the world</p>
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
                        Top City Destinations
                    </button>
                    <button
                        onClick={() => setActiveTab('activities')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'activities' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        City Activities
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">Discover Urban Adventures</h2>
                            <p className="text-gray-700">City breaks offer the perfect opportunity to immerse yourself in the vibrant energy, rich history, and diverse culture of the world&apos;s most exciting urban destinations. From iconic landmarks and world-class museums to bustling markets and innovative culinary scenes, cities provide endless possibilities for exploration and discovery.</p>

                            <p className="text-gray-700">Whether you&apos;re planning a romantic weekend getaway, a solo adventure, or a family trip, our city break packages are designed to help you experience the best of urban destinations. Enjoy guided tours of historic sites, sample local cuisine, shop in unique neighborhoods, and soak in the distinctive atmosphere that makes each city special.</p>

                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
                                <h3 className="font-bold text-purple-800">Best Time to Visit</h3>
                                <p className="text-purple-700">Spring and fall often offer pleasant weather and fewer crowds in many cities. Research specific events or festivals that might enhance your city experience.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">City Break Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore iconic landmarks and architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit world-class museums and galleries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience diverse culinary scenes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Shop in unique neighborhoods</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Enjoy vibrant nightlife and entertainment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover local history and culture</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your City Break
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top City Destinations</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cityDestinations.map((destination) => (
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">City Activities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Cultural Exploration</h3>
                                <p className="text-gray-600">Visit museums, galleries, historic sites, and architectural landmarks to immerse yourself in the city&apos;s culture.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Culinary Adventures</h3>
                                <p className="text-gray-600">Sample local cuisine at restaurants, food markets, and street vendors. Consider taking a cooking class or food tour.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Entertainment</h3>
                                <p className="text-gray-600">Attend live performances, concerts, theater shows, or sporting events for a taste of local entertainment.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">City Break Tips</h2>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Use Public Transportation</h4>
                                        <p className="text-gray-600">Many cities have excellent public transportation systems. Research metro cards or city passes that offer unlimited travel.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Comfortable Footwear</h4>
                                        <p className="text-gray-600">City exploration often involves a lot of walking. Pack comfortable shoes to avoid sore feet.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">City Passes</h4>
                                        <p className="text-gray-600">Many cities offer tourist passes that include entry to multiple attractions and can save you money.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Local Neighborhoods</h4>
                                        <p className="text-gray-600">Venture beyond tourist areas to discover authentic local neighborhoods and experiences.</p>
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
