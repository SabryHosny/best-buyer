'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function TurkeyPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Turkey</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Experience the wonders of this amazing destination</p>
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Crossroads of Civilizations</h2>
                            <p className="text-gray-700">Turkey is a nation straddling eastern Europe and western Asia with cultural connections to ancient Greek, Persian, Roman, Byzantine and Ottoman empires. Cosmopolitan Istanbul, on the Bosphorus Strait, is home to the iconic Hagia Sophia, with its soaring dome and Christian mosaics.</p>

                            <p className="text-gray-700">Turkey offers a wealth of destination varieties to travelers: from dome-and-minaret filled skyline of Istanbul to Roman ruins along the western and southern coasts, from heavily indented coastline against a mountainous backdrop of Lycia to the wide and sunny beaches of Pamphylia.</p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                                <h3 className="font-bold text-blue-800">Best Time to Visit</h3>
                                <p className="text-blue-700">April to May and September to November offer pleasant temperatures and fewer crowds.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Turkey Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore historic Istanbul</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover the fairy chimneys of Cappadocia</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit the ancient city of Ephesus</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax in the thermal pools of Pamukkale</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Cruise along the Turquoise Coast</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience Turkish hospitality</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Turkey Trip
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Attractions Content */}
                {activeTab === 'attractions' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Attractions in Turkey</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Hagia Sophia */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3214994/pexels-photo-3214994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Hagia Sophia</h3>
                                    <p className="text-gray-600 mb-4">This architectural marvel has served as a Byzantine cathedral, Ottoman mosque, and museum. Now a mosque again, its stunning dome and ancient mosaics showcase 1,500 years of history.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Istanbul, Sultanahmet District</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cappadocia */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Cappadocia</h3>
                                    <p className="text-gray-600 mb-4">Famous for its surreal landscape of fairy chimneys, cave dwellings, and hot air balloons at sunrise. Explore underground cities and ancient rock-cut churches in this UNESCO World Heritage site.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Central Anatolia</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pamukkale */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Pamukkale</h3>
                                    <p className="text-gray-600 mb-4">Known as &quot;Cotton Castle,&quot; these dazzling white travertine terraces filled with mineral-rich thermal waters create a surreal landscape. Visit the adjacent ancient city of Hierapolis.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Denizli Province, Southwestern Turkey</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ephesus */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/21758978/pexels-photo-21758978/free-photo-of-columns-and-roof-of-the-library-of-celsus-ephesus-modern-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Ephesus</h3>
                                    <p className="text-gray-600 mb-4">One of the best-preserved ancient cities in the Mediterranean, featuring the impressive Library of Celsus, the Great Theater, and remarkably intact streets and buildings from Roman times.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Near Selçuk, Izmir Province</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Turkey Tourism Packages</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Highlights Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/21758978/pexels-photo-21758978/free-photo-of-columns-and-roof-of-the-library-of-celsus-ephesus-modern-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}></div>
                                    <div className="absolute top-0 right-0 bg-[#e91e63] text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Turkey Highlights</h3>
                                    <p className="text-gray-600 mb-4">A 10-day journey through Turkey&apos;s most iconic destinations, including Istanbul, Cappadocia, and Ephesus.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">10 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,799</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Istanbul City Tour
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Cappadocia Balloon Ride
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Ephesus Ancient City
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

                            {/* Luxury Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Luxury
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Luxury Turkey Experience</h3>
                                    <p className="text-gray-600 mb-4">A 14-day premium journey featuring 5-star accommodations, private tours, and exclusive experiences throughout Turkey.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">14 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$3,499</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Private Yacht Cruise
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Exclusive Cave Hotel
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Private Guided Tours
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

                            {/* Turkish Coast Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Beach
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Turkish Coast Explorer</h3>
                                    <p className="text-gray-600 mb-4">A 12-day journey along Turkey&apos;s stunning Mediterranean and Aegean coastlines, with time in Bodrum, Antalya, and a traditional gulet cruise.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                            Blue Voyage Cruise
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Bodrum Castle Visit
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Antalya Old Town Tour
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
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Custom Turkey Tours</h3>
                            <p className="text-gray-600 mb-4">Looking for something specific? We can create a customized Turkey itinerary tailored to your interests, timeline, and budget.</p>
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Turkey Tourism Tips</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* When to Visit */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Best Time to Visit</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Spring (April to May) and autumn (September to October) offer the most pleasant weather for exploring Turkey. Summer (June to August) can be very hot, especially in the south and interior, while coastal areas benefit from sea breezes.</p>
                                <div className="bg-blue-50 p-3 rounded-md">
                                    <p className="text-blue-800 text-sm font-medium">Tip: Visit Cappadocia in spring when wildflowers bloom or in autumn when the landscape takes on golden hues.</p>
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
                                        <span>Modest clothing for visiting mosques (head scarf for women, long pants for men)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Comfortable walking shoes for exploring ancient sites</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sunscreen, sunglasses, and a hat for sun protection</span>
                                    </li>
                                </ul>
                                <div className="bg-amber-50 p-3 rounded-md">
                                    <p className="text-amber-800 text-sm font-medium">Tip: Pack a light jacket or sweater even in summer, as evenings can be cool in some regions, especially in Cappadocia.</p>
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
                                        <span>Remove shoes when entering homes and some religious sites</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Dress modestly when visiting mosques (covered shoulders and knees)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Learn a few basic Turkish phrases like &quot;Merhaba&quot; (hello) and &quot;Teşekkür ederim&quot; (thank you)</span>
                                    </li>
                                </ul>
                                <div className="bg-purple-50 p-3 rounded-md">
                                    <p className="text-purple-800 text-sm font-medium">Tip: Turkish people are known for their hospitality. Don&apos;t be surprised if you&apos;re invited for tea or offered food, as this is a common gesture of friendship.</p>
                                </div>
                            </div>

                            {/* Transportation */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                        <span>Domestic flights are convenient for covering long distances</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Intercity buses are comfortable, affordable, and connect most cities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>In cities, use taxis, ride-sharing apps, or public transportation</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 p-3 rounded-md">
                                    <p className="text-red-800 text-sm font-medium">Tip: For taxis, make sure the meter is running or agree on a price before starting your journey. In Istanbul, the metro and tram systems are efficient ways to avoid traffic.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden mt-8">
                            <div className="px-6 py-8 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                                <p className="mb-6">Our Turkey tourism specialists can provide personalized advice and help you plan the perfect trip.</p>
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
