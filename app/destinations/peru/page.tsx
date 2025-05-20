'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function PeruPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Peru</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Ancient wonders, breathtaking landscapes, and rich cultural heritage</p>
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">Land of the Incas</h2>
                            <p className="text-gray-700">Peru is a country in South America that&apos;s home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites.</p>

                            <p className="text-gray-700">On Peru&apos;s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art. The country&apos;s diverse landscape encompasses tropical Amazon jungle, the arid coastal desert, and the rugged peaks of the Andes.</p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                                <h3 className="font-bold text-yellow-800">Best Time to Visit</h3>
                                <p className="text-yellow-700">May to October is the dry season and ideal for hiking the Inca Trail and visiting Machu Picchu.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Peru Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore the ancient city of Machu Picchu</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover the Sacred Valley</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience vibrant Cusco</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Trek the Inca Trail</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit Lake Titicaca</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore the Amazon rainforest</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Peru Trip
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
