'use client';

import Navbar from './Navbar';

// This is a client component wrapper for Navbar
// This allows us to use the Navbar component in server components
export default function ClientNavbar() {
    return <Navbar />;
}