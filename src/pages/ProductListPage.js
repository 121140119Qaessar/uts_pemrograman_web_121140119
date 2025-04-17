import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

function ProductListPage() {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Filter produk berdasarkan kategori dan harga
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
    const matchesPrice = product.price >= (minPrice || 0) && product.price <= (maxPrice || Infinity);
    return matchesCategory && matchesPrice;
  });

  // Ambil produk berdasarkan halaman
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label className="mr-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Price Range</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 border rounded-md"
            placeholder="Min Price"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 border rounded-md ml-2"
            placeholder="Max Price"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevPage}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductListPage;
