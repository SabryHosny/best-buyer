import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import SchemaMarkup from './components/SchemaMarkup';
import GoogleAnalytics from './components/GoogleAnalytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Buyer | Best Buyers Card - Exclusive Tourism Discounts",
  description: "Best Buyer offers exclusive discounts on hotels, flights, and tourism services. Get your Best Buyers Card today and save up to 50% on your next vacation!",
  keywords: "best buyer, best buyers, best buyers card, tourism discounts, travel discounts, discount card",
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: "Best Buyer | Best Buyers Card - Exclusive Tourism Discounts",
    description: "Best Buyer offers exclusive discounts on hotels, flights, and tourism services. Get your Best Buyers Card today and save up to 50% on your next vacation!",
    url: "https://bestbuyerss.com",
    siteName: "Best Buyer",
    images: [
      {
        url: "https://bestbuyerss.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Buyer Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
      <head>
        <SchemaMarkup />
        {/* Replace G-XXXXXXXXXX with your actual Google Analytics Measurement ID */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

// Remove the following code:
// {
//   return (
//     <html lang=
