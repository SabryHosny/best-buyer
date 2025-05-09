import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl max-w-3xl mx-auto">Learn more about Best Buyer and our mission to make travel more affordable</p>
                </div>
            </div>

            {/* Company Story */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Tourism Plus was founded in 2020 with a simple mission: to make travel and tourism experiences more accessible and affordable for everyone.
                            </p>
                            <p className="text-gray-600 mb-4">
                                What started as a small team of travel enthusiasts has grown into a trusted platform connecting travelers with exclusive discounts from top service providers around the world.
                            </p>
                            <p className="text-gray-600">
                                Our innovative digital card system has revolutionized how travelers access discounts, making the process seamless and paperless.
                            </p>
                        </div>
                        <div className="bg-gray-200 h-80 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">We&apos;re committed to transforming the travel industry through technology and partnerships</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To create a world where everyone can experience the joy of travel without financial constraints, by building the most trusted discount platform in the travel industry.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To connect travelers with exclusive discounts through innovative technology, while building lasting partnerships with quality service providers who share our values of affordability, accessibility, and exceptional experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="text-center">
                                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold mb-1">Team Member Name</h3>
                                <p className="text-gray-600 mb-2">Position</p>
                                <p className="text-gray-500 text-sm">Brief description about the team member and their expertise in the travel industry.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Partnerships */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Certifications & Partnerships</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-32">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-200 mx-auto mb-2"></div>
                                    <p className="text-sm font-medium">Partner Name</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to start saving on your travels?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of happy travelers who are already enjoying exclusive discounts with Best Buyer</p>
                    <Link
                        href="/services"
                        className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full text-lg font-semibold transition-colors"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}