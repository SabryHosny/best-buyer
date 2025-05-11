'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AccountPage() {
    // Mock user data - in a real app, this would be fetched from an API
    const [userData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        profileImage: '/images/profile.jpg'
    });

    // Mock cards data - in a real app, this would be fetched from an API
    const [cards] = useState([
        {
            id: 'CARD123',
            service: 'Luxury Hotel Stay',
            discount: '30%',
            issueDate: '10/15/2023',
            expiryDate: '10/15/2024',
            isValid: true
        },
        {
            id: 'CARD456',
            service: 'City Tour',
            discount: '25%',
            issueDate: '08/22/2023',
            expiryDate: '08/22/2024',
            isValid: true
        },
        {
            id: 'CARD789',
            service: 'Car Rental',
            discount: '15%',
            issueDate: '05/10/2023',
            expiryDate: '05/10/2024',
            isValid: true
        },
        {
            id: 'CARD012',
            service: 'Mountain Hiking',
            discount: '20%',
            issueDate: '03/05/2023',
            expiryDate: '03/05/2024',
            isValid: false
        }
    ]);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-8">My Account</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar - User Profile */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                                <h2 className="text-xl font-semibold">{userData.name}</h2>
                                <p className="text-gray-600">{userData.email}</p>
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold mb-4">Account Details</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-500">Full Name</p>
                                        <p>{userData.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email Address</p>
                                        <p>{userData.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone Number</p>
                                        <p>{userData.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full px-4 py-2 bg-[#0e3b7c] text-white rounded-md hover:bg-[#0a2d5e] transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Cards */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">My Discount Cards</h2>
                                <Link
                                    href="/services"
                                    className="px-4 py-2 bg-[#e91e63] text-white rounded-md hover:bg-[#d81b60] transition-colors text-sm"
                                >
                                    Get New Card
                                </Link>
                            </div>

                            {cards.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card ID</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {cards.map((card) => (
                                                <tr key={card.id}>
                                                    <td className="px-4 py-4 whitespace-nowrap font-medium">{card.id}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">{card.service}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">{card.discount}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">{card.issueDate}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">{card.expiryDate}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${card.isValid ? 'bg-green-100 text-green-800' : 'bg-[#e91e63] bg-opacity-10 text-[#e91e63]'}`}>
                                                            {card.isValid ? 'Valid' : 'Expired'}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <button className="text-[#0e3b7c] hover:text-[#e91e63] mr-3">View</button>
                                                        {!card.isValid && (
                                                            <button className="text-[#0e3b7c] hover:text-[#e91e63]">Renew</button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500 mb-4">You don&apos;t have any discount cards yet.</p>
                                    <Link
                                        href="/services"
                                        className="px-4 py-2 bg-[#0e3b7c] text-white rounded-md hover:bg-[#0a2d5e] transition-colors"
                                    >
                                        Browse Services
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                            <h2 className="text-xl font-semibold mb-6">Account Security</h2>
                            <div className="space-y-4">
                                <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-left flex justify-between items-center">
                                    <span>Change Password</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-left flex justify-between items-center">
                                    <span>Two-Factor Authentication</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-left flex justify-between items-center">
                                    <span>Privacy Settings</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}