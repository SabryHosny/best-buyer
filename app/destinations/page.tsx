'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function DestinationsPage() {
    // Destination data
    const destinations = [
        {
            id: 'egypt',
            name: 'Egypt',
            description: 'Explore ancient pyramids, cruise the Nile, and discover the wonders of pharaonic civilization.',
            imagePath: 'https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-amber-500 to-amber-700'
        },
        {
            id: 'colombia',
            name: 'Colombia',
            description: 'Experience vibrant culture, lush landscapes, and the warmth of Colombian hospitality.',
            imagePath: 'https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-green-500 to-green-700'
        },
        {
            id: 'costa-rica',
            name: 'Costa Rica',
            description: 'Discover the magic of Pura Vida in this paradise of rainforests, volcanoes, and beaches.',
            imagePath: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-emerald-500 to-emerald-700'
        },
        {
            id: 'mexico',
            name: 'Mexico',
            description: 'Explore ancient ruins, relax on pristine beaches, and immerse yourself in rich traditions.',
            imagePath: 'https://images.pexels.com/photos/3551805/pexels-photo-3551805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-red-500 to-red-700'
        },
        {
            id: 'peru',
            name: 'Peru',
            description: 'Trek to Machu Picchu, explore the Sacred Valley, and experience the magic of the Andes.',
            imagePath: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-yellow-500 to-yellow-700'
        },
        {
            id: 'turkey',
            name: 'Turkey',
            description: 'Where East meets West, offering a blend of ancient history and stunning landscapes.',
            imagePath: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            color: 'from-blue-500 to-blue-700'
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[40vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Destinations</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">Explore our handpicked destinations around the world</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0e3b7c]">Discover Your Next Adventure</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        From ancient wonders to pristine beaches, our carefully selected destinations offer unforgettable experiences for every type of traveler.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.id}
                            href={`/destinations/${destination.id}`}
                            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <span className="px-4 py-2 bg-white text-[#0e3b7c] font-bold rounded-full">Explore</span>
                                </div>
                                <div className="h-full w-full">
                                    <Image
                                        src={destination.imagePath}
                                        alt={`${destination.name} destination`}
                                        width={500}
                                        height={300}
                                        className="h-full w-full object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-[#0e3b7c] mb-2 group-hover:text-[#e91e63] transition-colors duration-300">{destination.name}</h3>
                                <p className="text-gray-600">{destination.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-[#0e3b7c] to-[#0a2d5e] rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
                        <div className="md:w-0 md:flex-1">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Ready to start your journey?
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-blue-100">
                                Contact our travel experts to plan your perfect trip with exclusive discounts and personalized itineraries.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <div className="rounded-md shadow">
                                <Link
                                    href="/get-card"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#0e3b7c] bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                                >
                                    GET CARD
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}