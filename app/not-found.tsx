import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-6xl font-bold text-amber-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. But don&apos;t worry, 
          you can still get your Best Buyers Card and enjoy exclusive discounts on tourism services!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-amber-300 text-black rounded-md font-medium hover:bg-amber-400 transition-colors"
          >
            Return to Homepage
          </Link>
          <Link 
            href="/get-card"
            className="px-6 py-3 bg-[#e91e63] text-white rounded-md font-medium hover:bg-[#d81b60] transition-colors"
          >
            Get Best Buyers Card
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-gray-800 rounded-lg max-w-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Looking for something specific?</h3>
          <p className="text-gray-300 mb-4">
            Best Buyer offers exclusive discounts on hotels, flights, and tourism services. 
            Get your Best Buyers Card today and save up to 50% on your next vacation!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Link 
              href="/destinations"
              className="px-4 py-2 bg-[#0e3b7c] text-white rounded-md text-sm hover:bg-[#0a2d5e] transition-colors"
            >
              Explore Destinations
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-[#0e3b7c] text-white rounded-md text-sm hover:bg-[#0a2d5e] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
