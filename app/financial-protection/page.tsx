'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function FinancialProtectionPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="relative min-h-[calc(100vh-6rem)]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{
                        backgroundImage: `url('https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                        filter: 'brightness(0.3)'
                    }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4 py-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 mb-8 text-sm font-semibold text-white bg-[#4CAF50] rounded-full">
                            Coming Soon
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white">
                            Financial Protection
                        </h1>

                        {/* Subheading */}
                        <p className="mb-12 text-xl text-gray-200 max-w-2xl mx-auto">
                            We&apos;re working on enhancing your travel security. Our comprehensive financial protection program is coming soon to ensure your peace of mind while traveling.
                        </p>

                        {/* Simple Features List */}
                        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-12 max-w-xl mx-auto">
                            <h3 className="text-xl font-bold text-black mb-4">What to Expect</h3>
                            <ul className="text-left text-white space-y-4">
                                <li className="flex items-center bg-black bg-opacity-30 p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7CFC00] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Comprehensive travel insurance options</span>
                                </li>
                                <li className="flex items-center bg-black bg-opacity-30 p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7CFC00] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Secure payment processing</span>
                                </li>
                                <li className="flex items-center bg-black bg-opacity-30 p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7CFC00] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Money-back guarantee for eligible bookings</span>
                                </li>
                            </ul>
                        </div>

                        {/* Back to Home Link */}
                        <Link
                            href="/"
                            className="inline-block px-6 py-3 bg-[#4CAF50] text-white font-medium rounded-md hover:bg-[#388E3C] transition-colors duration-300"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
