'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn] = useState(false); // This would be replaced with actual auth state
    const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isInspirationOpen, setIsInspirationOpen] = useState(false);

    // Timeout refs for dropdown menus
    const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const destinationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const inspirationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (
        <nav className="bg-gradient-to-r from-black to-[#0e3b7c] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 sm:h-20 md:h-24 items-center">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="focus:outline-none">
                                <img
                                    src="/images/logo.png"
                                    alt="Best Buyer Logo"
                                    className="h-10 sm:h-12 md:h-16 w-auto transition-all duration-300"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex lg:items-center">
                        <div className="flex flex-wrap space-x-1 lg:space-x-2">
                            <Link href="/" className="px-2 lg:px-3 py-2 text-sm font-medium text-white hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md whitespace-nowrap">
                                Home
                            </Link>
                            <Link href="/services" className="px-2 lg:px-3 py-2 text-sm font-medium text-white hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md whitespace-nowrap">
                                All-Services
                            </Link>

                            {/* About dropdown */}
                            <div className="relative"
                                onMouseEnter={() => {
                                    if (aboutTimeoutRef.current) {
                                        clearTimeout(aboutTimeoutRef.current);
                                        aboutTimeoutRef.current = null;
                                    }
                                    setIsAboutOpen(true);
                                }}
                                onMouseLeave={() => {
                                    aboutTimeoutRef.current = setTimeout(() => {
                                        setIsAboutOpen(false);
                                    }, 100);
                                }}
                            >
                                <button className="px-2 lg:px-3 py-2 text-sm font-medium text-white hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center rounded-md">
                                    About
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isAboutOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out transform origin-top-left">
                                        <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            About us
                                        </Link>
                                        <Link href="/financial-protection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Financial Protection
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Destinations dropdown */}
                            <div className="relative"
                                onMouseEnter={() => {
                                    if (destinationsTimeoutRef.current) {
                                        clearTimeout(destinationsTimeoutRef.current);
                                        destinationsTimeoutRef.current = null;
                                    }
                                    setIsDestinationsOpen(true);
                                }}
                                onMouseLeave={() => {
                                    destinationsTimeoutRef.current = setTimeout(() => {
                                        setIsDestinationsOpen(false);
                                    }, 100);
                                }}
                            >
                                <button className="px-2 lg:px-3 py-2 text-sm font-medium text-white hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center rounded-md">
                                    Destinations
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDestinationsOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out transform origin-top-left">
                                        <Link href="/destinations/egypt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Egypt
                                        </Link>
                                        <Link href="/destinations/colombia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Colombia
                                        </Link>
                                        <Link href="/destinations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            All Destinations
                                        </Link>
                                        <Link href="/destinations/costa-rica" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Costa Rica
                                        </Link>
                                        <Link href="/destinations/mexico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Mexico
                                        </Link>
                                        <Link href="/destinations/peru" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Peru
                                        </Link>
                                        <Link href="/destinations/turkey" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Turkey
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Inspiration dropdown */}
                            <div className="relative"
                                onMouseEnter={() => {
                                    if (inspirationTimeoutRef.current) {
                                        clearTimeout(inspirationTimeoutRef.current);
                                        inspirationTimeoutRef.current = null;
                                    }
                                    setIsInspirationOpen(true);
                                }}
                                onMouseLeave={() => {
                                    inspirationTimeoutRef.current = setTimeout(() => {
                                        setIsInspirationOpen(false);
                                    }, 100);
                                }}
                            >
                                <button className="px-2 lg:px-3 py-2 text-sm font-medium text-white hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center rounded-md">
                                    Inspiration
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isInspirationOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out transform origin-top-left">
                                        <Link href="/inspiration/beach-stay" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Beach Stay
                                        </Link>
                                        <Link href="/inspiration/city-break" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            City Break
                                        </Link>
                                        <Link href="/inspiration/cruises" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Cruises
                                        </Link>
                                        <Link href="/inspiration/cultural-historic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Cultural & Historic
                                        </Link>
                                        <Link href="/inspiration/nature" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Nature
                                        </Link>
                                        <Link href="/inspiration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
                                            All Inspiration
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="ml-2 lg:ml-4 flex items-center">
                            <div className="hidden xl:flex flex-col items-start border-l border-gray-400 pl-4 ml-4">
                                <span className="text-white text-[10px] md:text-xs mr-2">+20 1155538363</span>
                                <span className="text-white text-[10px] md:text-xs mr-2">+20 1009966188</span>
                            </div>

                            {isLoggedIn ? (
                                <Link href="/account" className="ml-4 px-4 py-2 text-sm font-medium text-white hover:text-gray-300">
                                    My Account
                                </Link>
                            ) : (
                                <div className="flex space-x-2">
                                    <Link
                                        href="/get-card"
                                        className="ml-2 lg:ml-4 px-3 sm:px-4 lg:px-6 py-1.5 md:py-2 text-xs sm:text-sm font-medium text-white bg-[#e91e63] hover:bg-gradient-to-r hover:from-amber-200 hover:via-yellow-400 hover:to-amber-200 hover:text-black rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.6)] hover:scale-105"
                                    >
                                        Get Card
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-3 sm:px-4 lg:px-6 py-1.5 md:py-2 text-xs sm:text-sm font-medium text-white bg-[#0a2d5e] hover:bg-amber-300 hover:text-black rounded transition-all duration-200 hover:shadow-lg"
                                    >
                                        CONTACT US
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-[#0a2d5e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Add a subtle gradient separator */}
            <div className="w-full h-1 bg-gradient-to-r from-amber-300 via-[#0e3b7c] to-black opacity-50"></div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden bg-[#0e3b7c] transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="pt-2 pb-3 space-y-1 px-2">
                    <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0a2d5e]">
                        Home
                    </Link>

                    {/* About section */}
                    <div className="px-3 py-2 text-base font-medium text-white">
                        <button
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                            className="flex w-full justify-between items-center text-white hover:bg-[#0a2d5e] focus:outline-none"
                        >
                            <span>About</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isAboutOpen && (
                            <div className="mt-2 pl-4 border-l-2 border-gray-500 transition-all duration-300 ease-in-out">
                                <Link href="/about" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    About us
                                </Link>
                                <Link href="/financial-protection" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Financial Protection
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Destinations section */}
                    <div className="px-3 py-2 text-base font-medium text-white">
                        <button
                            onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                            className="flex w-full justify-between items-center text-white hover:bg-[#0a2d5e] focus:outline-none"
                        >
                            <span>Destinations</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDestinationsOpen && (
                            <div className="mt-2 pl-4 border-l-2 border-gray-500 transition-all duration-300 ease-in-out">
                                <Link href="/destinations/egypt" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Egypt
                                </Link>
                                <Link href="/destinations/colombia" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Colombia
                                </Link>
                                <Link href="/destinations" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    All Destinations
                                </Link>
                                <Link href="/destinations/costa-rica" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Costa Rica
                                </Link>
                                <Link href="/destinations/mexico" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Mexico
                                </Link>
                                <Link href="/destinations/peru" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Peru
                                </Link>
                                <Link href="/destinations/turkey" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Turkey
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Inspiration section */}
                    <div className="px-3 py-2 text-base font-medium text-white">
                        <button
                            onClick={() => setIsInspirationOpen(!isInspirationOpen)}
                            className="flex w-full justify-between items-center text-white hover:bg-[#0a2d5e] focus:outline-none"
                        >
                            <span>Inspiration</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isInspirationOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isInspirationOpen && (
                            <div className="mt-2 pl-4 border-l-2 border-gray-500 transition-all duration-300 ease-in-out">
                                <Link href="/inspiration/beach-stay" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Beach Stay
                                </Link>
                                <Link href="/inspiration/city-break" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    City Break
                                </Link>
                                <Link href="/inspiration/cruises" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Cruises
                                </Link>
                                <Link href="/inspiration/cultural-historic" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Cultural & Historic
                                </Link>
                                <Link href="/inspiration/nature" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    Nature
                                </Link>
                                <Link href="/inspiration" className="block py-2 text-sm text-gray-300 hover:bg-amber-300 hover:text-black transition-colors duration-200">
                                    All Inspiration
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="px-3 py-2 text-base font-medium text-white border-t border-gray-700 mt-2 pt-4">
                        <div className="flex items-center mb-4">
                            <span className="text-white">Call us: +20 1009966188</span>
                        </div>

                        {isLoggedIn ? (
                            <Link href="/account" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0a2d5e]">
                                My Account
                            </Link>
                        ) : (
                            <div className="space-y-2">
                                <Link
                                    href="/get-card"
                                    className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-[#e91e63] hover:bg-[#d81b60]"
                                >
                                    Get Card
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-[#0a2d5e] hover:bg-[#072348]"
                                >
                                    CONTACT US
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}