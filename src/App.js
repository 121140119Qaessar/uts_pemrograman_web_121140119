import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import UserProfilePage from './pages/UserProfilePage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import WishlistPage from './pages/WishlistPage'; // Import WishlistPage
import NotFoundPage from './pages/NotFoundPage'; // Import halaman 404

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} /> {/* Menambahkan rute wishlist */}
            <Route path="*" element={<NotFoundPage />} /> {/* Menambahkan rute 404 */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
