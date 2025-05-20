'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function ColombiaPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/13795457/pexels-photo-13795457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore Colombia</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Discover vibrant culture, lush landscapes, and warm hospitality</p>
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Heart of South America</h2>
                            <p className="text-gray-700">Colombia is a country at the northern tip of South America. It's landscape is marked by rainforests, Andes mountains and numerous coffee plantations. In the high-altitude capital, Bogotá, the Zona Rosa district is known for its restaurants and shops.</p>

                            <p className="text-gray-700">Colombia is famous for its diverse ecosystems, from the Amazon rainforest to the Caribbean coastline. The country's rich cultural heritage, influenced by indigenous, European, and African traditions, is reflected in its vibrant music, dance, and cuisine.</p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                                <h3 className="font-bold text-green-800">Best Time to Visit</h3>
                                <p className="text-green-700">December to March is the dry season and ideal for exploring Colombia's diverse regions.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Colombia Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore the colorful streets of Cartagena</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit the Coffee Cultural Landscape</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover Tayrona National Park</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience Bogotá's vibrant culture</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax on San Andrés Island</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Hike in the Cocora Valley</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Colombia Trip
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
