import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../store/productsSlice'; // Import action untuk menghapus produk dari wishlist
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify'; // Import toastify untuk notifikasi

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.wishlist); // Ambil data wishlist dari Redux store

  // Fungsi untuk menghapus produk dari wishlist
  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
    toast.success(`${product.title} removed from wishlist!`); // Menampilkan notifikasi
  };

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Your Wishlist</h1>
        <p className="text-lg">Your wishlist is currently empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <ProductCard product={product} />
            <button
              onClick={() => handleRemoveFromWishlist(product)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
