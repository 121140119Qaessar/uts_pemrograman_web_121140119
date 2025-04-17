import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountSettingsPage() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (!password || !newPassword) {
      alert("Please fill out both fields.");
    } else {
      // Simulasi perubahan password
      alert("Password changed successfully!");
      setPassword('');
      setNewPassword('');
      navigate('/profile'); // Kembali ke halaman profil setelah berhasil
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Current Password</label>
        <input
          type="password"
          className="w-full p-2 mt-1 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">New Password</label>
        <input
          type="password"
          className="w-full p-2 mt-1 border rounded-md"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
    </div>
  );
}

export default AccountSettingsPage;
