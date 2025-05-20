'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function MexicoPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 flex items-end justify-center pb-12">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Magical Mexico</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Ancient civilizations, vibrant culture, and stunning beaches</p>
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
                        onClick={() => setActiveTab('attractions')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'attractions' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Top Attractions
                    </button>
                    <button
                        onClick={() => setActiveTab('packages')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'packages' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Travel Packages
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">Land of Diversity</h2>
                            <p className="text-gray-700">Mexico is a country between the U.S. and Central America that&apos;s known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles. Ancient ruins such as Teotihuacán and the Mayan city of Chichén Itzá are scattered throughout the country.</p>

                            <p className="text-gray-700">Mexico City, the capital, is known for its 13th-century Aztec temple, the baroque Catedral Metropolitana de México, and the Palacio Nacional, which houses historic murals by Diego Rivera. With its rich cultural heritage, delicious cuisine, and warm hospitality, Mexico offers an unforgettable travel experience.</p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                                <h3 className="font-bold text-red-800">Best Time to Visit</h3>
                                <p className="text-red-700">November to April offers dry, pleasant weather for exploring Mexico&apos;s diverse attractions.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Mexico Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore ancient Mayan ruins</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax on pristine Caribbean beaches</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience vibrant Mexico City</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover colorful colonial towns</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Enjoy world-renowned cuisine</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Celebrate Day of the Dead</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Mexico Trip
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Attractions Content - Would be populated in a real app */}
                {activeTab === 'attractions' && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Attractions content coming soon...</p>
                    </div>
                )}

                {/* Packages Content - Would be populated in a real app */}
                {activeTab === 'packages' && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Packages content coming soon...</p>
                    </div>
                )}

                {/* Tips Content - Would be populated in a real app */}
                {activeTab === 'tips' && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Travel tips content coming soon...</p>
                    </div>
                )}
            </div>
        </main>
    );
}
