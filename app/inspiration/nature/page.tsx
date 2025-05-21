'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function NaturePage() {
    const [activeTab, setActiveTab] = useState('overview');

    // Nature destinations
    const natureDestinations = [
        {
            id: 'costarica',
            name: 'Costa Rica',
            description: 'Explore lush rainforests, active volcanoes, and incredible biodiversity.',
            imagePath: 'https://images.pexels.com/photos/32129164/pexels-photo-32129164/free-photo-of-serene-waterfall-in-lush-costa-rican-jungle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'iceland',
            name: 'Iceland',
            description: 'Discover dramatic landscapes with glaciers, geysers, and the Northern Lights.',
            imagePath: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'newzealand',
            name: 'New Zealand',
            description: 'Experience stunning mountains, fjords, and diverse ecosystems.',
            imagePath: 'https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'tanzania',
            name: 'Tanzania',
            description: 'Witness the Serengeti migration and climb Mount Kilimanjaro.',
            imagePath: 'https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                        backgroundImage: `url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nature</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Immerse yourself in the world&apos;s most breathtaking natural landscapes</p>
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
                        Nature Destinations
                    </button>
                    <button
                        onClick={() => setActiveTab('activities')}
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap mr-4 ${activeTab === 'activities' ? 'text-[#e91e63] border-b-2 border-[#e91e63]' : 'text-gray-500 hover:text-[#0e3b7c]'}`}
                    >
                        Outdoor Activities
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
                            <h2 className="text-3xl font-bold text-[#0e3b7c]">Connect with the Natural World</h2>
                            <p className="text-gray-700">Nature travel offers a chance to escape the hustle and bustle of everyday life and reconnect with the natural world. From lush rainforests and majestic mountains to pristine beaches and dramatic deserts, our planet is filled with awe-inspiring landscapes waiting to be explored.</p>

                            <p className="text-gray-700">Our nature-focused trips are designed to provide immersive experiences in the world&apos;s most spectacular natural environments. Whether you&apos;re seeking adventure, relaxation, or a deeper connection with the natural world, we offer carefully crafted itineraries that showcase the beauty and diversity of our planet while promoting sustainable and responsible travel practices.</p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                                <h3 className="font-bold text-green-800">Best Time to Visit</h3>
                                <p className="text-green-700">The ideal time for nature travel varies by destination and the specific natural phenomena you want to experience, such as migrations, blooming seasons, or optimal weather conditions.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-[#0e3b7c] mb-4">Nature Travel Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Explore national parks and protected areas</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Witness incredible wildlife in natural habitats</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Experience diverse ecosystems and landscapes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Participate in outdoor adventures and activities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Learn about conservation and sustainability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#e91e63] mr-2">✦</span>
                                    <span>Disconnect from technology and reconnect with nature</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="block w-full py-2 px-4 bg-[#e91e63] text-white text-center rounded-md hover:bg-[#0e3b7c] transition-colors duration-300"
                                >
                                    Plan Your Nature Adventure
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Destinations Content */}
                {activeTab === 'destinations' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Top Nature Destinations</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {natureDestinations.map((destination) => (
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
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Outdoor Activities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Hiking & Trekking</h3>
                                <p className="text-gray-600">Explore scenic trails through mountains, forests, and other natural landscapes, ranging from easy walks to challenging multi-day treks.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Wildlife Viewing</h3>
                                <p className="text-gray-600">Observe animals in their natural habitats through safaris, guided tours, or self-guided exploration in wildlife-rich areas.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b7c] mb-2">Adventure Sports</h3>
                                <p className="text-gray-600">Experience the thrill of activities like zip-lining, white-water rafting, rock climbing, or kayaking in stunning natural settings.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Content */}
                {activeTab === 'tips' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0e3b7c] mb-6">Nature Travel Tips</h2>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Pack Appropriate Gear</h4>
                                        <p className="text-gray-600">Research the climate and terrain of your destination to pack suitable clothing, footwear, and equipment for outdoor activities.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Practice Leave No Trace</h4>
                                        <p className="text-gray-600">Follow principles like packing out trash, staying on designated trails, and respecting wildlife to minimize your environmental impact.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Safety Precautions</h4>
                                        <p className="text-gray-600">Research potential hazards, carry a first aid kit, and inform someone of your plans when venturing into remote areas.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e91e63] text-white">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-[#0e3b7c]">Support Conservation</h4>
                                        <p className="text-gray-600">Choose eco-friendly tour operators and accommodations that contribute to conservation efforts in the areas you visit.</p>
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
