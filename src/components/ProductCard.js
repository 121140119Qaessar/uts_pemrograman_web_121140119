import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist } from '../store/productsSlice';  
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'; // Import toastify

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.wishlist); // Ambil data wishlist dari Redux store

  // Cek apakah produk sudah ada di wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // Fungsi untuk menambahkan produk ke keranjang
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Item successfully added to cart!'); // Menambahkan notifikasi sukses
  };

  // Fungsi untuk menambahkan produk ke wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    toast.info('Item added to wishlist!'); // Menambahkan notifikasi info
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
        loading="lazy"
      />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold">${product.price}</span>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>

          {/* Tampilkan tombol "Add to Wishlist" hanya jika produk belum ada di wishlist */}
          {!isInWishlist && (
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={handleAddToWishlist}
              aria-label={`Add ${product.title} to wishlist`}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Validasi untuk props yang diterima oleh komponen
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
