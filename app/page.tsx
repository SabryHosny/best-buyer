'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { categories } from './lib/categories';
export default function Home() {

  // Testimonials data removed

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[70vh] bg-black text-white overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-70">
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
    </main>
  );
}
