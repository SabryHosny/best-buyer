import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-black text-amber-300 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Best Buyer</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300">Your trusted partner in travel and tourism services</p>
                </div>
            </div>

            {/* About Content */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-amber-300">Our Story</h2>
                            <p className="text-gray-400 mb-4">
                                Best Buyer was founded in 2010 with a simple mission: to make travel more affordable and accessible for everyone.
                                We started as a small local agency and have grown into a global platform serving millions of customers worldwide.
                            </p>
                            <p className="text-gray-400">
                                Our team of travel experts works tirelessly to negotiate the best deals with top service providers,
                                ensuring our customers get the most value for their money.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-amber-300">Our Mission</h2>
                            <p className="text-gray-400 mb-4">
                                We believe that everyone deserves to experience the world without breaking the bank.
                                That&apos;s why we&apos;ve created a unique system that offers exclusive discounts on a wide range of travel services.
                            </p>
                            <p className="text-gray-400">
                                Through our innovative discount card program, we&apos;re helping travelers save money while supporting local businesses
                                and promoting sustainable tourism practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-amber-300">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">John Doe</h3>
                            <p className="text-gray-400">CEO & Founder</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Jane Smith</h3>
                            <p className="text-gray-400">COO</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Mike Johnson</h3>
                            <p className="text-gray-400">CTO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-amber-300">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Customer Focus</h3>
                            <p className="text-gray-400">We put our customers at the center of everything we do</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Integrity</h3>
                            <p className="text-gray-400">We operate with honesty and transparency</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">Innovation</h3>
                            <p className="text-gray-400">We constantly seek new ways to improve our services</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}