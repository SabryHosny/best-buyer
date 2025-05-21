'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { categories } from './lib/categories';
export default function Home() {

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[calc(100vh-6rem)] bg-black text-white overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-45">
          <source src="/videos/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-amber-300">EXPLORE THE WORLD AT THE BEST PRICES!</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-400 font-semibold">Get exclusive discounts on tourism services with your <Link href="/get-card" className="p-1.5 text-gray-50 uppercase hover:text-amber-300">personal_card</Link></p>
          <Link
            href="#categories"
            className="px-8 py-4 bg-amber-300 hover:bg-amber-400 text-black rounded-full text-lg font-semibold transition-colors"
          >
            Choose Your Service Now
          </Link>
        </div>
      </div>

      {/* Promotional Banner */}
      <section className="py-16 md:py-24 px-4 bg-[#0e3b7c] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 w-full">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8">
            <div className="text-center mb-8 max-w-lg">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-3xl md:text-5xl font-medium mb-6 flex flex-wrap items-center justify-center gap-2 gap-y-4"
              >
                {/* SAVE UP TO <span className="inline-block bg-[#e74c3c] px-4 py-2 text-white font-extrabold">25%</span> */}
                <span className="mr-2 text-3xl md:text-5xl  whitespace-nowrap">SAVE UP TO</span>
                <span className="inline-block bg-[#e74c3c] px-5 py-2 text-white font-extrabold text-3xl md:text-5xl whitespace-nowrap min-w-[90px] text-center">25%</span>
              </h2>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl md:text-5xl font-medium mb-6"
              >
                IN MORE THAN
              </h2>
              <h2
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-2xl md:text-4xl font-extralight mb-6 flex flex-wrap items-center justify-center gap-2 gap-y-4"
              >
                <span className="inline-block bg-[#e74c3c] px-5 py-2 text-white font-extrabold text-2xl md:text-4xl whitespace-nowrap min-w-[90px] text-center">5,000</span>
                <span className="ml-2 text-base md:text-2xl  whitespace-nowrap">PLACES IN/OUT EGYPT</span>
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
              <Link href="/get-card" className="bg-[#e74c3c] text-white font-bold py-3 px-8 rounded-md text-center flex-1 transition-all duration-300 hover:text-gray-800 hover:bg-gradient-to-r hover:from-amber-200 hover:to-amber-300 hover:shadow-[0_0_15px_rgba(231,76,60,0.7)] hover:scale-105 hover:translate-y-[-3px] relative overflow-hidden group">
                <span className="relative z-10">GET THE CARD</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link href="/download-app" className="bg-[#0a1f4a] text-white font-bold py-3 px-8 rounded-md border-2 border-white text-center flex-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-700 hover:border-amber-300 hover:shadow-[0_0_15px_rgba(30,58,138,0.7)] hover:scale-105 hover:translate-y-[-3px] relative overflow-hidden group">
                <span className="relative z-10">DOWNLOAD THE APP</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="relative w-full h-64 mt-10"
            >
              <Image
                src="/images/Card-2.png"
                alt="Xclusives Card"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start py-6 px-4 sm:px-6 md:py-8 md:px-0">
            <div className="space-y-4 sm:space-y-6 max-w-xl mx-auto md:mx-0">
              <h2
                data-aos="fade-left"
                data-aos-delay="100"
                className="text-2xl sm:text-3xl font-bold leading-tight"
              >
                Best Buyers Card – Your Passport to Explore the World
              </h2>
              <p
                data-aos="fade-left"
                data-aos-delay="200"
                className="text-base sm:text-lg"
              >
                Turn your next vacation into the trip of a lifetime with the Best Buyers Card. Enjoy exclusive discounts of up to 50% on all your tourism needs — from luxurious hotels and exciting cruises to private planes and serene yacht rentals.
              </p>
              <ul
                data-aos="fade-left"
                data-aos-delay="300"
                className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base"
              >
                <li><span className="font-medium">Hotels:</span> Find accommodations that perfectly match your style and budget.</li>
                <li><span className="font-medium">Flights:</span> Book affordable airfare to your dream destinations.</li>
                <li><span className="font-medium">Visas:</span> Enjoy hassle-free visa assistance to simplify your tourism planning.</li>
                <li><span className="font-medium">Cruises & Yachts:</span> Embark on unforgettable adventures across the seas.</li>
                <li><span className="font-medium">Private Planes:</span> Travel in style and comfort with exclusive private jet deals.</li>
              </ul>
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                className="text-base sm:text-lg font-medium"
              >
                Explore the world with confidence — only with Best Buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Save More With Us */}
      <section id="categories" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-300">Save More With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={category.id <= 3}
                  />
                  <h3 className="absolute top-0 left-0 w-full text-center py-4 text-yellow-300 font-bold text-xl drop-shadow-[0_0_8px_rgba(255,255,0,0.8)] animate-pulse bg-black/50">{category.name}</h3>

                  {category.comingSoon ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0e3b7c]/70">
                      <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                        <div className="text-white text-center">
                          <p className="font-bold">COMING</p>
                          <p className="font-bold">SOON</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={`/categories/${category.id}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Tourism content can go here */}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Tips */}
      <section className="py-16 px-4 bg-[#0e3b7c]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Tourism Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plan Ahead */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Plan Ahead</h3>
              <p className="text-gray-200">Planning a trip in advance will give you enough time to research and plan your destination and save you money.</p>
            </div>

            {/* Pack Light */}
            <div data-aos="fade-up" data-aos-delay="150" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Pack Light</h3>
              <p className="text-gray-200">When you pack light, you&apos;ll have more freedom to travel and easily maneuver through crowded spots.</p>
            </div>

            {/* Stay Connected */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Stay Connected</h3>
              <p className="text-gray-200">Please ensure your mobile phone has an internet connection so you can stay in touch with your family and friends, plan your itinerary better, and stay safe and secure.</p>
            </div>

            {/* Secure Your Documents */}
            <div data-aos="fade-up" data-aos-delay="250" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Secure Your Documents</h3>
              <p className="text-gray-200">When traveling, use accessories like a crossbody bag or purse to keep your documents close and secure.</p>
            </div>

            {/* Health Precautions */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Health Precautions</h3>
              <p className="text-gray-200">Schedule an appointment with your healthcare provider at least a month before your departure for destination-specific vaccines, medicines, and advice.</p>
            </div>

            {/* Local Etiquette */}
            <div data-aos="fade-up" data-aos-delay="350" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Local Etiquette</h3>
              <p className="text-gray-200">Every country has its unique culture, and understanding local etiquette enhances your first impression, making your trip more enjoyable and successful.</p>
            </div>

            {/* Stay Safe */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Stay Safe</h3>
              <p className="text-gray-200">Protect your money, phone, and passport. Above all else, protect all three. Possessing these three can replace everything else. If you lose one, the other two can help you replace the lost item.</p>
            </div>

            {/* Insurance */}
            <div data-aos="fade-up" data-aos-delay="450" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Insurance</h3>
              <p className="text-gray-200">Insurance can reduce the significant financial risks associated with travel, including accidents, illness, missed flights, canceled tours, lost baggage, theft, etc.</p>
            </div>

            {/* Be Flexible and Open-Minded */}
            <div data-aos="fade-up" data-aos-delay="500" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Be Flexible and Open-Minded</h3>
              <p className="text-gray-200">Traveling with an open mind lets you fully immerse yourself in new cultures, ideas, and lifestyles.</p>
            </div>

            {/* Money Management */}
            <div data-aos="fade-up" data-aos-delay="550" className="bg-[#0a1f4a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-2 border-[#ff1a1a]">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Money Management</h3>
              <p className="text-gray-200">Creating a travel budget is essential to save money while traveling abroad or avoid overspending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-300">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Choose your service</h3>
              <p className="text-gray-400">Browse our wide range of services and select the one you need</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Receive your digital card</h3>
              <p className="text-gray-400">Get your personalized discount card instantly via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Enjoy your discount</h3>
              <p className="text-gray-400">Present your card to the service provider and save money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-300">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Top Partnerships</h3>
              <p className="text-gray-400">We partner with the best service providers in the industry</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Exclusive Discounts</h3>
              <p className="text-gray-400">Save up to 50% with our exclusive discount cards</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">24/7 Support</h3>
              <p className="text-gray-400">Our customer service team is available around the clock</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Secure Booking</h3>
              <p className="text-gray-400">Our booking system is simple, secure, and reliable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section removed */}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#0e3b7c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join today and get your personal card for free!</h2>
          <Link
            href="/get-card"
            className="inline-block px-8 py-4 bg-white text-[#0e3b7c] hover:bg-amber-300 hover:text-black hover:shadow-[0_0_15px_5px_rgba(255,193,7,0.5)] rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Card
          </Link>
        </div>
      </section>

      <Footer />
    </main >
  );
}
