'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#FFF8F0]">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg space-y-6">
        <h1 className="text-7xl font-extrabold text-gray-800 tracking-tight">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700">
          Oops! Page not found.
        </p>
        <p className="text-md text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link href="/">
            <button className="bg-[#6b4f1d] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#845c1f] hover:scale-105 transition-transform duration-300">
              Go Back Home
            </button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
