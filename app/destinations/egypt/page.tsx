'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function EgyptPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Egypt</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Experience the wonders of ancient civilization and breathtaking landscapes</p>
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Land of Pharaohs</h2>
                            <p className="text-gray-700">Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza&apos;s colossal Pyramids and Great Sphinx as well as Luxor&apos;s hieroglyph-lined Karnak Temple and Valley of the Kings tombs.</p>

                            <p className="text-gray-700">The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque and the Egyptian Museum, a trove of antiquities. With its rich cultural heritage, stunning landscapes, and warm hospitality, Egypt offers an unforgettable travel experience.</p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                                <h3 className="font-bold text-amber-800">Best Time to Visit</h3>
                                <p className="text-amber-700">October to April offers the most pleasant temperatures for exploring Egypt&apos;s treasures.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Egypt Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore the Great Pyramids of Giza</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Cruise the Nile River</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit the Valley of the Kings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover the temples of Luxor</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax at Red Sea resorts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience Cairo&apos;s vibrant culture</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Egypt Trip
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Attractions Content */}
                {activeTab === 'attractions' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Attractions in Egypt</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Pyramids of Giza */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Pyramids of Giza</h3>
                                    <p className="text-gray-600 mb-4">The only surviving structure of the Seven Wonders of the Ancient World, the Great Pyramid and its neighbors stand as a testament to ancient Egyptian engineering and culture.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Giza, Cairo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Luxor Temple */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Luxor Temple</h3>
                                    <p className="text-gray-600 mb-4">An ancient Egyptian temple complex located on the east bank of the Nile River, dedicated to the rejuvenation of kingship.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Luxor</span>
                                    </div>
                                </div>
                            </div>

                            {/* Valley of the Kings */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Valley of the Kings</h3>
                                    <p className="text-gray-600 mb-4">A valley where rock-cut tombs were excavated for the pharaohs and powerful nobles of the New Kingdom, including the famous tomb of Tutankhamun.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>West Bank of the Nile, Luxor</span>
                                    </div>
                                </div>
                            </div>

                            {/* Abu Simbel */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/5488754/pexels-photo-5488754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Abu Simbel Temples</h3>
                                    <p className="text-gray-600 mb-4">Two massive rock temples carved out of the mountainside in the 13th century BC, during the reign of Pharaoh Ramesses II.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Nubia, Southern Egypt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Egypt Travel Packages</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Classic Egypt Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/19820429/pexels-photo-19820429/free-photo-of-the-columns-of-an-ancient-egyptian-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                    <div className="absolute top-0 right-0 bg-[#e91e63] text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Classic Egypt Tour</h3>
                                    <p className="text-gray-600 mb-4">Explore Cairo, Luxor, and Aswan with a Nile cruise in this comprehensive 8-day tour of Egypt&apos;s most iconic sites.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">8 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,299</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Pyramids & Sphinx Tour
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            4-Night Nile Cruise
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Valley of the Kings
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

                            {/* Luxury Egypt Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/5488754/pexels-photo-5488754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Luxury
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Luxury Egypt Experience</h3>
                                    <p className="text-gray-600 mb-4">Indulge in a premium 12-day journey through Egypt with 5-star accommodations and exclusive experiences.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">12 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$2,899</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Private Tours & Guides
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Luxury Nile Cruise
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Hot Air Balloon Ride
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

                            {/* Family Egypt Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Family
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Egypt Family Adventure</h3>
                                    <p className="text-gray-600 mb-4">A 10-day family-friendly tour with interactive experiences designed to engage and educate travelers of all ages.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">10 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,699</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Kid-Friendly Activities
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Desert Camel Ride
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Red Sea Snorkeling
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
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Custom Egypt Tours</h3>
                            <p className="text-gray-600 mb-4">Looking for something specific? We can create a customized Egypt itinerary tailored to your interests, timeline, and budget.</p>
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Egypt Travel Tips</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* When to Visit */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Best Time to Visit</h3>
                                </div>
                                <p className="text-gray-600 mb-4">The best time to visit Egypt is from October to April when temperatures are cooler. December and January are peak tourist months. Summer (June to August) can be extremely hot, especially in Upper Egypt.</p>
                                <div className="bg-amber-50 p-3 rounded-md">
                                    <p className="text-amber-800 text-sm font-medium">Tip: Spring (March-April) and fall (October-November) offer pleasant weather and fewer crowds.</p>
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
                                        <span>Lightweight, modest clothing (shoulders and knees covered for religious sites)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sun protection: hat, sunglasses, sunscreen (SPF 30+)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Comfortable walking shoes for exploring ancient sites</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 p-3 rounded-md">
                                    <p className="text-blue-800 text-sm font-medium">Tip: Pack a light scarf or shawl for women to cover hair when visiting mosques.</p>
                                </div>
                            </div>

                            {/* Cultural Etiquette */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Cultural Etiquette</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Dress modestly, especially in rural areas and religious sites</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Ask permission before photographing locals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Remove shoes before entering mosques</span>
                                    </li>
                                </ul>
                                <div className="bg-purple-50 p-3 rounded-md">
                                    <p className="text-purple-800 text-sm font-medium">Tip: Learn a few Arabic phrases like &quot;shukran&quot; (thank you) and &quot;ma&apos;as salama&quot; (goodbye) to connect with locals.</p>
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
                                        <span>Drink only bottled water and avoid ice in drinks</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Use reputable tour operators for excursions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Carry a basic medical kit with stomach remedies</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 p-3 rounded-md">
                                    <p className="text-red-800 text-sm font-medium">Tip: Purchase comprehensive travel insurance that covers medical evacuation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden mt-8">
                            <div className="px-6 py-8 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                                <p className="mb-6">Our Egypt travel specialists can provide personalized advice and help you plan the perfect trip.</p>
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
