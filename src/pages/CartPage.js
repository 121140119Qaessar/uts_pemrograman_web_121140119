import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart } from '../store/productsSlice'; // Mengimpor aksi yang diperlukan
import { toast } from 'react-toastify'; // Import toastify

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart); // Mengambil data cart dari Redux store

  // Fungsi untuk menghapus produk dari keranjang
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); // Mengirim aksi untuk menghapus produk dari keranjang
    toast.success(`${product.title} removed from cart!`); // Menampilkan notifikasi
  };

  // Fungsi untuk mengurangi kuantitas produk
  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product)); // Mengirim aksi untuk mengurangi kuantitas produk
    toast.info(`${product.title} quantity decreased`); // Menampilkan notifikasi
  };

  // Fungsi untuk menambah kuantitas produk
  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product)); // Mengirim aksi untuk menambah produk ke keranjang (menambah kuantitas)
    toast.info(`${product.title} quantity increased`); // Menampilkan notifikasi
  };

  // Menghitung total harga keranjang
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">Your Cart</h1>
        <p className="text-lg text-gray-700">Your shopping cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">Your Cart</h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-semibold text-xl text-blue-600">${product.price}</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleDecreaseQuantity(product)}
                      className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{product.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(product)}
                      className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 focus:outline-none"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Menampilkan Total Harga */}
        <div className="text-right mt-8">
          <h2 className="font-bold text-xl text-gray-800">Total: ${calculateTotal().toFixed(2)}</h2>
          <button
            className="w-full sm:w-auto bg-green-500 text-white px-8 py-3 rounded-full mt-4 hover:bg-green-600 focus:outline-none"
            onClick={() => window.location.href = '/checkout'}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
