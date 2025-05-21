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
                        backgroundImage: `url('https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg')`
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

                {/* Attractions Content */}
                {activeTab === 'attractions' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Attractions in Peru</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Machu Picchu */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Machu Picchu</h3>
                                    <p className="text-gray-600 mb-4">This UNESCO World Heritage site is Peru&apos;s most famous attraction. The ancient Incan citadel sits high in the Andes Mountains, offering breathtaking views and remarkable archaeological structures.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Near Cusco, Andes Mountains</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sacred Valley */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Sacred Valley</h3>
                                    <p className="text-gray-600 mb-4">A fertile valley dotted with ancient Incan ruins, traditional villages, and stunning landscapes. Visit the terraced salt pans of Maras and the circular terraces of Moray.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Between Cusco and Machu Picchu</span>
                                    </div>
                                </div>
                            </div>

                            {/* Lake Titicaca */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Lake Titicaca</h3>
                                    <p className="text-gray-600 mb-4">The world&apos;s highest navigable lake, home to unique floating islands made of reeds and inhabited by the Uros people who maintain ancient traditions.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Puno, Southern Peru</span>
                                    </div>
                                </div>
                            </div>

                            {/* Colca Canyon */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Colca Canyon</h3>
                                    <p className="text-gray-600 mb-4">One of the world&apos;s deepest canyons, offering spectacular views, traditional villages, and the chance to spot the majestic Andean condor soaring overhead.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Near Arequipa, Southern Peru</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Peru Travel Packages</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Classic Peru Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg')` }}></div>
                                    <div className="absolute top-0 right-0 bg-[#e91e63] text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Classic Peru Journey</h3>
                                    <p className="text-gray-600 mb-4">A 10-day exploration of Peru&apos;s highlights, including Lima, Cusco, the Sacred Valley, and Machu Picchu.</p>
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
                                            Machu Picchu Guided Tour
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Sacred Valley Excursion
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Cusco City Tour
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

                            {/* Inca Trail Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Adventure
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Inca Trail Trek</h3>
                                    <p className="text-gray-600 mb-4">A 12-day adventure featuring the classic 4-day Inca Trail trek to Machu Picchu, plus time in Lima and Cusco.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">12 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$2,299</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            4-Day Inca Trail Trek
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Camping Equipment
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Professional Guides
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

                            {/* Peru & Amazon Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Nature
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Peru & Amazon Explorer</h3>
                                    <p className="text-gray-600 mb-4">A 14-day comprehensive tour combining Peru&apos;s cultural highlights with an unforgettable Amazon rainforest experience.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">14 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$2,699</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Amazon Jungle Lodge Stay
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Wildlife Spotting
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Machu Picchu Visit
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
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Custom Peru Tours</h3>
                            <p className="text-gray-600 mb-4">Looking for something specific? We can create a customized Peru itinerary tailored to your interests, timeline, and budget.</p>
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Peru Travel Tips</h2>

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
                                <p className="text-gray-600 mb-4">The dry season (May to October) is the best time to visit Peru, especially for trekking and visiting Machu Picchu. The rainy season (November to April) brings lush landscapes but can make some trails difficult.</p>
                                <div className="bg-green-50 p-3 rounded-md">
                                    <p className="text-green-800 text-sm font-medium">Tip: June to August is peak tourist season. Consider visiting in May or September for good weather with fewer crowds.</p>
                                </div>
                            </div>

                            {/* Altitude */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Altitude Considerations</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Cusco sits at 11,152 feet (3,399 m) above sea level</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Spend 2-3 days acclimatizing before attempting strenuous activities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Stay hydrated and avoid alcohol during acclimatization</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 p-3 rounded-md">
                                    <p className="text-blue-800 text-sm font-medium">Tip: Consider starting your trip in Lima or the Sacred Valley (which is lower than Cusco) to help with altitude adjustment.</p>
                                </div>
                            </div>

                            {/* What to Pack */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                        <span>Layered clothing (temperatures can vary dramatically in a single day)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sun protection: hat, sunglasses, and high SPF sunscreen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sturdy walking shoes or hiking boots for uneven terrain</span>
                                    </li>
                                </ul>
                                <div className="bg-amber-50 p-3 rounded-md">
                                    <p className="text-amber-800 text-sm font-medium">Tip: Pack a rain jacket even in the dry season, as weather in the Andes can be unpredictable.</p>
                                </div>
                            </div>

                            {/* Health & Safety */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Health & Safety</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Drink only bottled or purified water</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Consider altitude sickness medication (consult your doctor)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Use registered taxis or transportation services</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 p-3 rounded-md">
                                    <p className="text-red-800 text-sm font-medium">Tip: Carry coca tea or coca candies, which locals use to help with altitude adjustment (but note these products may be illegal to bring back to your home country).</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden mt-8">
                            <div className="px-6 py-8 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                                <p className="mb-6">Our Peru travel specialists can provide personalized advice and help you plan the perfect trip.</p>
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
