import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
    // Sample services data
    const services = [
        {
            id: 1,
            name: 'Luxury Hotel Stay',
            image: '/images/hotel-luxury.jpg',
            category: 'Hotels',
            description: 'Experience 5-star luxury accommodations with exclusive amenities',
            originalPrice: 299,
            discountedPrice: 209,
            discount: '30%'
        },
        {
            id: 2,
            name: 'Budget Hotel',
            image: '/images/hotel-budget.jpg',
            category: 'Hotels',
            description: 'Comfortable and affordable stays for the budget-conscious traveler',
            originalPrice: 99,
            discountedPrice: 79,
            discount: '20%'
        },
        {
            id: 3,
            name: 'City Tour',
            image: '/images/city-tour.jpg',
            category: 'Tours',
            description: 'Guided tour of the city&apos;s most famous landmarks and hidden gems',
            originalPrice: 50,
            discountedPrice: 35,
            discount: '30%'
        },
        {
            id: 4,
            name: 'Mountain Hiking',
            image: '/images/mountain-hiking.jpg',
            category: 'Trips',
            description: 'Guided hiking trips through scenic mountain trails',
            originalPrice: 75,
            discountedPrice: 60,
            discount: '20%'
        },
        {
            id: 5,
            name: 'Car Rental',
            image: '/images/car-rental.jpg',
            category: 'Transport',
            description: 'Affordable car rentals for exploring at your own pace',
            originalPrice: 45,
            discountedPrice: 38,
            discount: '15%'
        },
        {
            id: 6,
            name: 'Cultural Festival',
            image: '/images/cultural-festival.jpg',
            category: 'Events & Festivals',
            description: 'Experience local traditions, music, and cuisine',
            originalPrice: 30,
            discountedPrice: 18,
            discount: '40%'
        },
    ];

    // Categories for filtering
    const categories = ['All', 'Hotels', 'Trips', 'Transport', 'Tours', 'Events & Festivals'];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header */}
            <div className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl max-w-3xl mx-auto">Browse our wide range of services and get your personal discount card</p>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filters */}
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-300 relative">
                                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
                                        {service.discount} OFF
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <span className="text-gray-400 line-through mr-2">${service.originalPrice}</span>
                                            <span className="text-xl font-bold text-blue-600">${service.discountedPrice}</span>
                                        </div>
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                                        >
                                            Details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <Link
                                        href={`/card/create?service=${service.id}`}
                                        className="block w-full text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Get My Card
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Don&apos;t see what you&apos;re looking for?</h2>
                    <p className="text-xl text-gray-600 mb-8">Contact us for custom packages and special requests</p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}