import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Import toastify

function CheckoutPage() {
  const cart = useSelector((state) => state.products.cart);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePlaceOrder = () => {
    if (!name || !address) {
      alert("Please fill out all fields.");
    } else {
      toast.success("Your order has been placed successfully!"); // Menambahkan notifikasi sukses
    }
  };

  const handlePayment = () => {
    if (!name || !address) {
      toast.error("Please fill out all fields before paying!"); // Menambahkan notifikasi error
    } else {
      toast.success("Payment successful! Your order is being processed."); // Menambahkan notifikasi sukses
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Checkout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold">${product.price}</span>
              <span className="font-semibold">Quantity: {product.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block font-semibold">Address</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded-md"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <label className="block font-semibold">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>

      <div className="text-right mt-6">
        <h2 className="font-bold text-lg">Total: ${calculateTotal().toFixed(2)}</h2>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-700"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded mt-4 ml-4 hover:bg-blue-700"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
