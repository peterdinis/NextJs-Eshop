import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
        <Link
            href="/"
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Home
        </Link>
        <Link
            href="/foods"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Foods
        </Link>
        <Link
            href="/category"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Categories
        </Link>
        <Link
            href="/card"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Card 0
        </Link>
        <Link
            href="/auth/register"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            Register
        </Link>
    </div>
}

export default Menu;