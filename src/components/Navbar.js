import { Link } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Oregastore</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-400">Products</Link>
          <Link to="/cart" className="text-white hover:text-gray-400">Cart</Link>
          <Link to="/wishlist" className="text-white hover:text-gray-400">Wishlist</Link> {/* Link ke Wishlist */}
          {user ? (
            <>
              <Link to="/profile" className="text-white hover:text-gray-400">Profile</Link>
              <Link to="/account-settings" className="text-white hover:text-gray-400">Account Settings</Link>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
