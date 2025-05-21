'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function InspirationPage() {
    // Inspiration categories
    const categories = [
        {
            id: 'beach-stay',
            name: 'Beach Stay',
            description: 'Relax on pristine beaches with crystal-clear waters and golden sands.',
            imagePath: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: 'city-break',
            name: 'City Break',
            description: 'Explore vibrant cities with rich culture, architecture, and culinary delights.',
            imagePath: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            color: 'from-purple-400 to-purple-600'
        },
        {
            id: 'cruises',
            name: 'Cruises',
            description: 'Set sail on unforgettable journeys across oceans and rivers around the world.',
            imagePath: 'https://images.pexels.com/photos/913112/pexels-photo-913112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-cyan-400 to-cyan-600'
        },
        {
            id: 'cultural-historic',
            name: 'Cultural & Historic',
            description: 'Discover ancient civilizations, historic landmarks, and cultural treasures.',
            imagePath: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            color: 'from-amber-400 to-amber-600'
        },
        {
            id: 'nature',
            name: 'Nature',
            description: 'Immerse yourself in breathtaking landscapes, from mountains to rainforests.',
            imagePath: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            color: 'from-green-400 to-green-600'
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[50vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Travel Inspiration</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Discover ideas for your next unforgettable journey</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0e3b7c]">Find Your Perfect Travel Experience</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Whether you&apos;re seeking relaxation, adventure, or cultural immersion, we have the perfect travel inspiration for you.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/inspiration/${category.id}`}
                            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <span className="px-4 py-2 bg-white text-[#0e3b7c] font-bold rounded-full">Explore</span>
                                </div>
                                <div className="h-full w-full">
                                    <Image
                                        src={category.imagePath}
                                        alt={`${category.name} inspiration`}
                                        width={500}
                                        height={300}
                                        className="h-full w-full object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-[#0e3b7c] mb-2 group-hover:text-[#e91e63] transition-colors duration-300">{category.name}</h3>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
                        <div className="md:w-0 md:flex-1">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Ready to plan your dream vacation?
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-blue-100">
                                Our travel experts are here to help you create the perfect itinerary based on your interests.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <div className="rounded-md shadow">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#0e3b7c] bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
