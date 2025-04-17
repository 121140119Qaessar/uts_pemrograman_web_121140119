import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-8 text-center rounded-lg shadow-2xl">
      <h1 className="text-5xl font-bold mb-6">UTS Pemrograman Web</h1>
      <p className="text-xl mb-8">Muhammad Qaessar Kartadilaga - 121140119</p>
      <Link
        to="/products"
        className="bg-yellow-500 hover:bg-yellow-400 text-white py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default HomePage;
