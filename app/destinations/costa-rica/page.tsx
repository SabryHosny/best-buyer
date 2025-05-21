'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function CostaRicaPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Costa Rica</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Experience the magic of Pura Vida in this biodiversity paradise</p>
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Land of Pura Vida</h2>
                            <p className="text-gray-700">Costa Rica is a rugged, rainforested Central American country with coastlines on the Caribbean and Pacific. Though its capital, San Jose, is home to cultural institutions like the Pre-Columbian Gold Museum, Costa Rica is known for its beaches, volcanoes, and biodiversity.</p>

                            <p className="text-gray-700">Roughly a quarter of its area is made up of protected jungle, teeming with wildlife including spider monkeys and quetzal birds. Costa Rica is known for its progressive environmental policies, being the only country to meet all five UNEP criteria for environmental sustainability.</p>

                            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-6">
                                <h3 className="font-bold text-emerald-800">Best Time to Visit</h3>
                                <p className="text-emerald-700">December to April (dry season) is ideal for exploring Costa Rica&apos;s natural wonders.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Costa Rica Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore Arenal Volcano National Park</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Discover Manuel Antonio National Park</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax on pristine beaches</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience thrilling zip-lining</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit Monteverde Cloud Forest</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Encounter diverse wildlife</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Costa Rica Trip
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Attractions Content */}
                {activeTab === 'attractions' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Attractions in Costa Rica</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Arenal Volcano */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Arenal Volcano</h3>
                                    <p className="text-gray-600 mb-4">One of Costa Rica&apos;s most iconic landmarks, this active volcano offers hiking trails, hot springs, and stunning views of its perfect conical shape.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>La Fortuna, Northern Lowlands</span>
                                    </div>
                                </div>
                            </div>

                            {/* Manuel Antonio National Park */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Manuel Antonio National Park</h3>
                                    <p className="text-gray-600 mb-4">A biodiverse paradise where lush rainforest meets pristine beaches. Spot monkeys, sloths, and colorful birds while hiking scenic trails.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Central Pacific Coast</span>
                                    </div>
                                </div>
                            </div>

                            {/* Monteverde Cloud Forest */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2896132/pexels-photo-2896132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Monteverde Cloud Forest</h3>
                                    <p className="text-gray-600 mb-4">Experience the mystical beauty of a high-altitude forest shrouded in mist, home to over 2,500 plant species and numerous rare animals.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Puntarenas Province, Central Highlands</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tortuguero National Park */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-64 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/248880/pexels-photo-248880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Tortuguero National Park</h3>
                                    <p className="text-gray-600 mb-4">Known as the &quot;Amazon of Costa Rica,&quot; this remote park is accessible only by boat or plane and famous for sea turtle nesting on its protected beaches.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Caribbean Coast</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Packages Content */}
                {activeTab === 'packages' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Costa Rica Travel Packages</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Costa Rica Highlights Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-[#e91e63] text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Costa Rica Highlights</h3>
                                    <p className="text-gray-600 mb-4">Experience the best of Costa Rica in this 9-day tour covering volcanoes, cloud forests, and beautiful beaches.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">9 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,799</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Arenal Volcano Hike
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Monteverde Cloud Forest
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Manuel Antonio Beach
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
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Adventure
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Costa Rica Adventure</h3>
                                    <p className="text-gray-600 mb-4">An action-packed 10-day tour featuring zip-lining, white water rafting, and wildlife encounters.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">10 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$2,099</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Canopy Zip-lining
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
                                            Night Jungle Tour
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

                            {/* Family Package */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}></div>
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-bold">
                                        Family
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0e3b7c] mb-2">Costa Rica Family Fun</h3>
                                    <p className="text-gray-600 mb-4">A 7-day family-friendly tour with activities suitable for all ages, from wildlife watching to gentle hikes.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-500 ml-1">7 Days</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#e91e63]">$1,599</div>
                                    </div>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Wildlife Sanctuary Visit
                                        </li>
                                        <li className="flex items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Chocolate Making Class
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Beach Time & Swimming
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
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Custom Costa Rica Tours</h3>
                            <p className="text-gray-600 mb-4">Looking for something specific? We can create a customized Costa Rica itinerary tailored to your interests, timeline, and budget.</p>
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Costa Rica Travel Tips</h2>

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
                                <p className="text-gray-600 mb-4">Costa Rica has two main seasons: the dry season (December to April) and the rainy or &quot;green&quot; season (May to November). The dry season is the most popular time to visit, but the green season offers lush landscapes and fewer crowds.</p>
                                <div className="bg-green-50 p-3 rounded-md">
                                    <p className="text-green-800 text-sm font-medium">Tip: Visit during the &quot;shoulder months&quot; (May, November) for a good balance of weather and smaller crowds.</p>
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
                                        <span>Lightweight, quick-dry clothing (shorts, t-shirts, long-sleeve shirts)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Rain jacket or poncho, especially during green season</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Insect repellent with DEET and biodegradable sunscreen</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 p-3 rounded-md">
                                    <p className="text-blue-800 text-sm font-medium">Tip: Pack a pair of closed-toe water shoes for river crossings and waterfall hikes.</p>
                                </div>
                            </div>

                            {/* Wildlife Viewing */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0e3b7c]">Wildlife Viewing Tips</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Early morning is the best time for wildlife spotting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Hire local guides who know where to find elusive animals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Bring binoculars for spotting birds and animals in the canopy</span>
                                    </li>
                                </ul>
                                <div className="bg-amber-50 p-3 rounded-md">
                                    <p className="text-amber-800 text-sm font-medium">Tip: Never feed or touch wildlife, and maintain a respectful distance for both your safety and theirs.</p>
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
                                        <span>Tap water is generally safe in most areas, but bottled water is recommended in remote regions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Use reef-safe sunscreen to protect coral reefs and marine life</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Always follow safety guidelines for adventure activities</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 p-3 rounded-md">
                                    <p className="text-red-800 text-sm font-medium">Tip: Never swim at beaches with strong rip currents, and always heed warning signs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden mt-8">
                            <div className="px-6 py-8 md:p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                                <p className="mb-6">Our Costa Rica travel specialists can provide personalized advice and help you plan the perfect trip.</p>
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
