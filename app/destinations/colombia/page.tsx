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
                        backgroundImage: `url('https://images.pexels.com/photos/16637471/pexels-photo-16637471/free-photo-of-clouds-over-medellin-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
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
                        Tourism Packages
                    </button>
                    <button
                        onClick={() => setActiveTab('tips')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'tips' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Tourism Tips
                    </button>
                </div>

                {/* Overview Content */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Heart of South America</h2>
                            <p className="text-gray-700">Colombia is a country at the northern tip of South America. It&apos;s landscape is marked by rainforests, Andes mountains and numerous coffee plantations. In the high-altitude capital, Bogotá, the Zona Rosa district is known for its restaurants and shops.</p>

                            <p className="text-gray-700">Colombia is famous for its diverse ecosystems, from the Amazon rainforest to the Caribbean coastline. The country&apos;s rich cultural heritage, influenced by indigenous, European, and African traditions, is reflected in its vibrant music, dance, and cuisine.</p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                                <h3 className="font-bold text-green-800">Best Time to Visit</h3>
                                <p className="text-green-700">December to March is the dry season and ideal for exploring Colombia&apos;s diverse regions.</p>
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
                                    <span>Experience Bogotá&apos;s vibrant culture</span>
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

                {/* Attractions Content */}
                {activeTab === 'attractions' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Attractions in Colombia</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Cartagena */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/13830743/pexels-photo-13830743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Cartagena Old Town</h3>
                                    <p className="text-gray-600 mb-4">Explore the colorful colonial streets, historic walls, and vibrant plazas of this UNESCO World Heritage site on Colombia&apos;s Caribbean coast.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Cartagena, Caribbean Coast</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cocora Valley */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/13795457/pexels-photo-13795457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Cocora Valley</h3>
                                    <p className="text-gray-600 mb-4">Hike through the stunning valley home to the world&apos;s tallest palm trees, set against the backdrop of the misty Andean mountains.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Near Salento, Coffee Region</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tayrona National Park */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Tayrona National Park</h3>
                                    <p className="text-gray-600 mb-4">Experience the unique combination of lush rainforest meeting pristine Caribbean beaches, with hiking trails and secluded coves.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Santa Marta, Caribbean Coast</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bogotá */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">La Candelaria, Bogotá</h3>
                                    <p className="text-gray-600 mb-4">Wander through the historic center of Colombia&apos;s capital, with its colorful colonial buildings, world-class museums, and vibrant street art.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Bogotá, Andean Region</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Colombia Tourism Packages</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Colombia Highlights Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/13830743/pexels-photo-13830743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                    <div className="absolute top-0 right-0 bg-[#e91e63] text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Colombia Highlights</h3>
                                    <p className="text-gray-600 mb-4">Experience the best of Colombia in this 10-day tour covering Bogotá, the Coffee Region, and Cartagena.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">10 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,899</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Bogotá City Tour
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Coffee Farm Experience
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Cartagena Walking Tour
                                        </li>
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>

                            {/* Caribbean Coast Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Beach Lovers
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Caribbean Coast Explorer</h3>
                                    <p className="text-gray-600 mb-4">Discover Colombia&apos;s stunning Caribbean coastline with visits to Cartagena, Tayrona National Park, and Palomino.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">8 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,499</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Cartagena City Tour
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Tayrona Park Hike
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Rosario Islands Boat Trip
                                        </li>
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>

                            {/* Adventure Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/13795457/pexels-photo-13795457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Adventure
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Colombia Adventure</h3>
                                    <p className="text-gray-600 mb-4">An action-packed 12-day tour featuring hiking, rafting, and wildlife spotting in Colombia&apos;s diverse landscapes.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">12 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$2,199</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Cocora Valley Hike
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            White Water Rafting
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Lost City Trek
                                        </li>
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Custom Colombia Tours</h3>
                            <p className="text-gray-600 mb-4">Looking for something specific? We can create a customized Colombia itinerary tailored to your interests, timeline, and budget.</p>
                            <Link
                                href="/contact"
                                className="inline-block py-2 px-6 bg-[#0e3b7c] text-white rounded-md hover:bg-[#e91e63] transition-colors duration-300"
                            >
                                Request Custom Tour
                            </Link>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Colombia Tourism Tips</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* When to Visit */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Best Time to Visit</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Colombia is a year-round destination due to its equatorial location. The country has two main seasons: dry (December-March and July-August) and rainy (April-June and September-November), though climate varies by region.</p>
                                <div className="bg-green-50 p-3 rounded-md">
                                    <p className="text-green-800 text-sm font-medium">Tip: December to March is generally the best time to visit most regions, with less rainfall and comfortable temperatures.</p>
                                </div>
                            </div>

                            {/* What to Pack */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">What to Pack</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Layered clothing (Colombia has diverse climates from tropical coasts to cool mountains)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Rain jacket or umbrella, especially during rainy seasons</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Insect repellent for tropical areas</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 p-3 rounded-md">
                                    <p className="text-blue-800 text-sm font-medium">Tip: Pack a lightweight, quick-dry towel for beach visits and hiking in the humid regions.</p>
                                </div>
                            </div>

                            {/* Transportation */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Getting Around</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Domestic flights are the best way to travel between major cities due to mountainous terrain</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Uber and taxi apps are available in major cities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Public buses connect most towns and cities</span>
                                    </li>
                                </ul>
                                <div className="bg-purple-50 p-3 rounded-md">
                                    <p className="text-purple-800 text-sm font-medium">Tip: Book domestic flights in advance for better rates, especially during high season and holidays.</p>
                                </div>
                            </div>

                            {/* Safety */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Safety Tips</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Stick to tourist areas and avoid isolated places, especially at night</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Use official taxis or ride-sharing apps rather than hailing cabs on the street</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Keep valuables secure and be discreet with expensive items</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 p-3 rounded-md">
                                    <p className="text-red-800 text-sm font-medium">Tip: Register with your country&apos;s embassy or consulate before traveling to Colombia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden mt-8">
                            <div className="px-6 py-8 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                                <p className="mb-6">Our Colombia tourism specialists can provide personalized advice and help you plan the perfect trip.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block py-2 px-6 bg-white text-[#0e3b7c] rounded-md hover:bg-[#e91e63] hover:text-white transition-colors duration-300"
                                >
                                    Contact Our Experts
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
