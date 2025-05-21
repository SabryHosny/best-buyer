'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function CruisesPage() {
    const [activeTab, setActiveTab] = useState('overview');

    // Cruise destinations
    const cruiseDestinations = [
        {
            id: 'caribbean',
            name: 'Caribbean Cruises',
            description: 'Explore tropical islands, pristine beaches, and vibrant coral reefs in the Caribbean.',
            imagePath: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'mediterranean',
            name: 'Mediterranean Cruises',
            description: 'Discover historic ports, ancient ruins, and stunning coastal towns along the Mediterranean.',
            imagePath: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'alaska',
            name: 'Alaska Cruises',
            description: 'Witness breathtaking glaciers, fjords, and wildlife in the pristine wilderness of Alaska.',
            imagePath: 'https://images.pexels.com/photos/27173836/pexels-photo-27173836/free-photo-of-cruise-ship-moored-on-sea-coast-near-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'river',
            name: 'River Cruises',
            description: 'Enjoy intimate journeys along scenic rivers, visiting charming towns and historic cities.',
            imagePath: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                        backgroundImage: `url('https://images.pexels.com/photos/635512/pexels-photo-635512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cruises</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Set sail on unforgettable journeys across oceans and rivers</p>
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
                        Cruise Destinations
                    </button>
                    <button
                        onClick={() => setActiveTab('experiences')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'experiences' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Onboard Experiences
                    </button>
                    <button
                        onClick={() => setActiveTab('tips')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'tips' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Cruise Tips
                    </button>
                </div>

                {/* Overview Content */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">The Ultimate Floating Vacation</h2>
                            <p className="text-gray-700">Cruises offer a unique travel experience where your accommodation, dining, entertainment, and transportation are all combined into one floating resort. Wake up in a new destination each day without the hassle of packing and unpacking, and enjoy the convenience of visiting multiple places in a single trip.</p>

                            <p className="text-gray-700">From massive ocean liners with endless amenities to intimate river cruises that take you into the heart of historic cities, there&apos;s a cruise experience for every type of traveler. Enjoy gourmet dining, world-class entertainment, relaxing spa treatments, and exciting shore excursions that allow you to explore diverse destinations around the globe.</p>

                            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 my-6">
                                <h3 className="font-bold text-cyan-800">Best Time to Cruise</h3>
                                <p className="text-cyan-700">The ideal time for cruising varies by destination. Caribbean cruises are popular year-round, while Alaska cruises operate primarily from May to September.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Cruise Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Visit multiple destinations in one trip</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Enjoy all-inclusive dining options</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience world-class entertainment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Participate in exciting shore excursions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Relax with spa treatments and pools</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Unpack only once for your entire trip</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Find Your Perfect Cruise
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Popular Cruise Destinations</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cruiseDestinations.map((destination) => (
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
                                            Explore Cruises
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Onboard Experiences</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Dining Experiences</h3>
                                <p className="text-gray-600">From casual buffets to elegant fine dining, cruises offer a variety of culinary experiences to satisfy every palate.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Entertainment</h3>
                                <p className="text-gray-600">Enjoy Broadway-style shows, live music, comedy performances, and themed parties throughout your cruise.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Activities</h3>
                                <p className="text-gray-600">From pools and water slides to rock climbing walls and mini-golf, cruises offer endless activities for all ages.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Cruise Tips</h2>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Book Shore Excursions Early</h4>
                                        <p className="text-gray-600">Popular shore excursions can sell out quickly. Book in advance to secure your spot for the activities you most want to experience.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Pack Essentials</h4>
                                        <p className="text-gray-600">Bring motion sickness remedies, formal attire for special dinners, and a day bag for shore excursions.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Arrive a Day Early</h4>
                                        <p className="text-gray-600">Consider arriving at your departure port a day early to avoid stress from potential travel delays.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Research Port Cities</h4>
                                        <p className="text-gray-600">Learn about the ports you&apos;ll be visiting to make the most of your limited time in each destination.</p>
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
