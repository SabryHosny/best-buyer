'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import './navbar.css';

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
        <nav className="bg-[#0e3b7c] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-2xl text-white italic logo-link">
                                <span className="uppercase tracking-wider">Best Buyer</span>
                                <span className="text-xs block text-gray-300 mt-[-5px]">SINCE 1975</span>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center">
                        <div className="flex space-x-1">
                            <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300">
                                Home
                            </Link>

                            <Link href="/services" className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300">
                                All Services
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
                                <button className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 flex items-center dropdown-button">
                                    About
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isAboutOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-dropdown">
                                        <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            About us
                                        </Link>
                                        <Link href="/financial-protection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
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
                                <button className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 flex items-center dropdown-button">
                                    Destinations
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDestinationsOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-dropdown">
                                        <Link href="/destinations/egypt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Egypt
                                        </Link>
                                        <Link href="/destinations/colombia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Colombia
                                        </Link>
                                        <Link href="/destinations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            All Destinations
                                        </Link>
                                        <Link href="/destinations/costa-rica" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Costa Rica
                                        </Link>
                                        <Link href="/destinations/mexico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Mexico
                                        </Link>
                                        <Link href="/destinations/peru" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Peru
                                        </Link>
                                        <Link href="/destinations/turkey" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
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
                                <button className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 flex items-center dropdown-button">
                                    Inspiration
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isInspirationOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-dropdown">
                                        <Link href="/inspiration/beach-stay" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Beach Stay
                                        </Link>
                                        <Link href="/inspiration/city-break" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            City Break
                                        </Link>
                                        <Link href="/inspiration/cruises" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Cruises
                                        </Link>
                                        <Link href="/inspiration/cultural-historic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Cultural & Historic
                                        </Link>
                                        <Link href="/inspiration/nature" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            Nature
                                        </Link>
                                        <Link href="/inspiration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item">
                                            All Inspiration
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="ml-4 flex items-center">
                            <div className="flex items-center border-l border-gray-400 pl-4 ml-4">
                                <span className="text-white text-sm mr-2">020 7370 6446</span>
                            </div>

                            {isLoggedIn ? (
                                <Link href="/account" className="ml-4 px-4 py-2 text-sm font-medium text-white hover:text-gray-300">
                                    My Account
                                </Link>
                            ) : (
                                <div className="flex space-x-2">
                                    <Link
                                        href="/get-card"
                                        className="ml-4 px-6 py-2 text-sm font-medium text-white bg-[#e91e63] hover:bg-[#d81b60]"
                                    >
                                        Get Card
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-6 py-2 text-sm font-medium text-white bg-[#0a2d5e] hover:bg-[#072348]"
                                    >
                                        CONTACT US
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center md:hidden">
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

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0e3b7c]">
                    <div className="pt-2 pb-3 space-y-1 px-2">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0a2d5e]">
                            Home
                        </Link>

                        <Link href="/services" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0a2d5e]">
                            All Services
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
                                <div className="mt-2 pl-4 border-l-2 border-gray-500">
                                    <Link href="/about" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        About us
                                    </Link>
                                    <Link href="/financial-protection" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
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
                                <div className="mt-2 pl-4 border-l-2 border-gray-500">
                                    <Link href="/destinations/egypt" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Egypt
                                    </Link>
                                    <Link href="/destinations/colombia" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Colombia
                                    </Link>
                                    <Link href="/destinations" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        All Destinations
                                    </Link>
                                    <Link href="/destinations/costa-rica" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Costa Rica
                                    </Link>
                                    <Link href="/destinations/mexico" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Mexico
                                    </Link>
                                    <Link href="/destinations/peru" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Peru
                                    </Link>
                                    <Link href="/destinations/turkey" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
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
                                <div className="mt-2 pl-4 border-l-2 border-gray-500">
                                    <Link href="/inspiration/beach-stay" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Beach Stay
                                    </Link>
                                    <Link href="/inspiration/city-break" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        City Break
                                    </Link>
                                    <Link href="/inspiration/cruises" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Cruises
                                    </Link>
                                    <Link href="/inspiration/cultural-historic" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Cultural & Historic
                                    </Link>
                                    <Link href="/inspiration/nature" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        Nature
                                    </Link>
                                    <Link href="/inspiration" className="block py-2 text-sm text-gray-300 hover:text-white dropdown-item">
                                        All Inspiration
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="px-3 py-2 text-base font-medium text-white border-t border-gray-700 mt-2 pt-4">
                            <div className="flex items-center mb-4">
                                <span className="text-white">Call us: 020 7370 6446</span>
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
            )}
        </nav>
    );
}