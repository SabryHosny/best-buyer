'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  // Sample featured services data
  const featuredServices = [
    {
      id: 1,
      name: 'Hotel Bookings',
      image: '/images/hotel.jpg',
      discount: '30%',
      description: 'Exclusive discounts on premium hotels worldwide'
    },
    {
      id: 2,
      name: 'Day Trips',
      image: '/images/day-trip.jpg',
      discount: '25%',
      description: 'Explore local attractions with expert guides'
    },
    {
      id: 3,
      name: 'Car Rentals',
      image: '/images/car-rental.jpg',
      discount: '15%',
      description: 'Affordable vehicle rentals for your journey'
    },
    {
      id: 4,
      name: 'Cultural Tours',
      image: '/images/cultural-tour.jpg',
      discount: '40%',
      description: 'Immerse yourself in local traditions and history'
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      photo: '/images/testimonial1.jpg',
      text: 'The discount card saved me over $200 on my hotel booking in Paris. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      photo: '/images/testimonial2.jpg',
      text: 'I used my card for a cultural tour in Tokyo and the process was seamless. Will definitely use again!'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      photo: '/images/testimonial3.jpg',
      text: 'Great customer service when I needed help with my booking. The discounts are genuine and substantial.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[70vh] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore the world at the best prices!</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">Get exclusive discounts on travel and tourism services with your personal card</p>
          <Link
            href="#services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-colors"
          >
            Choose Your Service Now
          </Link>
        </div>
      </div>

      {/* Featured Services */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
                    {service.discount} OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                  >
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose your service</h3>
              <p className="text-gray-600">Browse our wide range of services and select the one you need</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Receive your digital card</h3>
              <p className="text-gray-600">Get your personalized discount card instantly via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy your discount</h3>
              <p className="text-gray-600">Present your card to the service provider and save money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Top Partnerships</h3>
              <p className="text-gray-600">We partner with the best service providers in the industry</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Exclusive Discounts</h3>
              <p className="text-gray-600">Save up to 50% with our exclusive discount cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is available around the clock</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">Our booking system is simple, secure, and reliable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join today and get your personal card for free!</h2>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full text-lg font-semibold transition-colors"
          >
            Sign Up / Log In
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
