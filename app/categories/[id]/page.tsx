import { notFound } from 'next/navigation';
import ClientNavbar from '../../components/ClientNavbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../../lib/categories';
import type { JSX } from 'react';

// Generate static paths for all categories
export function generateStaticParams() {
    return categories.map((category) => ({
        id: category.id.toString(),
    }));
}

// Server component (no 'use client' directive)
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }): Promise<JSX.Element> {
    // Get the id from params and find the category
    const { id } = await params;
    const categoryId = parseInt(id);
    const category = categories.find(c => c.id === categoryId);

    // Handle not found case
    if (!category) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-gray-900">
            <ClientNavbar />

            {/* Category Details Section */}
            <section className="py-16 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-amber-300">{category.name}</h1>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {category.images?.map((image: string, index: number) => (
                            <div key={index} className="h-64 bg-gray-700 rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${category.name} ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="bg-gray-700/50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4 border border-gray-600/30">
                        <h2 className="text-2xl font-bold text-amber-300 mb-4">About {category.name}</h2>
                        <p className="text-gray-300 text-justify leading-relaxed">{category.description}</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-6 p-6 bg-gradient-to-r from-yellow-500/20 via-yellow-600/20 to-yellow-700/20 border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_5px_rgba(234,179,8,0.3)] w-fit mx-auto">
                        <Link href="/get-card" className="px-10 py-4 text-base font-medium text-white bg-[#e91e63] rounded-md hover:bg-[#ffc107] hover:text-black hover:shadow-[0_0_15px_5px_rgba(255,193,7,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                            Get Card
                        </Link>
                        <Link href="/contact" className="px-10 py-4 text-base font-medium text-white bg-[#0a2d5e] rounded-md hover:bg-amber-300 hover:text-black transition-colors">
                            CONTACT
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}