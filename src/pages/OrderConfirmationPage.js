import { useNavigate } from 'react-router-dom';

function OrderConfirmationPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');  // Mengarahkan pengguna kembali ke halaman utama
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Order Confirmation</h1>
      <p className="text-lg">Thank you for your order! We are processing your order and will notify you shortly.</p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700"
        onClick={handleBackToHome}
      >
        Back to Home
      </button>
    </div>
  );
}

export default OrderConfirmationPage;
