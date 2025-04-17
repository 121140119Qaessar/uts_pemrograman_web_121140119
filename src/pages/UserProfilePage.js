import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfilePage() {
  const user = JSON.parse(localStorage.getItem('user')) || {}; // Ambil data user dari localStorage
  const [name, setName] = useState(user.username || ''); // Menggunakan state untuk mengelola nama
  const [address, setAddress] = useState(user.address || ''); // Menggunakan state untuk mengelola alamat
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    if (!name || !address) {
      alert("Please fill out all fields.");
    } else {
      const updatedUser = { username: name, address: address };
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Simpan data profil yang diperbarui
      alert("Profile updated successfully!");
      navigate('/'); // Mengarahkan pengguna kembali ke halaman utama setelah menyimpan profil
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Address</label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded-md"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
        onClick={handleSaveProfile}
      >
        Save Profile
      </button>
    </div>
  );
}

export default UserProfilePage;
