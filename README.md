Ujian Tengah Semester Pemrograman Web

- **Nama**: Muhammad Qaessar Kartadilaga
- **NIM**: 121140119
- **Mata Kuliah**: Pemrograman Web

## **Deskripsi Tugas**
Tugas ini bertujuan untuk mengembangkan aplikasi berbasis **React** yang menerapkan berbagai konsep fundamental React seperti:
- **Komponen**: Pembagian aplikasi menjadi komponen-komponen yang dapat digunakan kembali.
- **Hooks**: Penggunaan hooks seperti `useState`, `useEffect`, `useContext`, dan custom hooks.
- **State Management**: Pengelolaan state menggunakan **Redux** untuk menyimpan dan mengelola data global seperti keranjang belanja dan wishlist.
- **Routing**: Implementasi **React Router** untuk navigasi antar halaman.
- **Fetching Data**: Pengambilan data produk dari **API eksternal** dan penanganan loading/error states.
- **UI/UX**: Penerapan desain yang responsif dan interaktif menggunakan **Tailwind CSS**.

## **Komponen yang Terpenuhi**
### **1. Komponen**
- Penggunaan **komponen fungsional** yang dapat digunakan kembali, seperti `Navbar`, `ProductCard`, dan halaman-halaman seperti `HomePage`, `CartPage`, dan `WishlistPage`.
- Struktur komponen yang rapi dan memisahkan logika ke dalam file yang sesuai.
  - **File**: `src/components/Navbar.js`, `src/components/ProductCard.js`

### **2. Penggunaan Hooks**
- **`useState`** untuk mengelola state lokal seperti data produk, kuantitas produk, dan status pengambilan data.
- **`useEffect`** untuk melakukan **fetching data** dari API eksternal dan mengelola **side effects**.
- **Custom Hook (`useFetch`)** untuk melakukan pengambilan data dari API dan menangani error serta status loading.
  - **File**: `src/hooks/useFetch.js`

### **3. State Management**
- **Redux** digunakan untuk pengelolaan state global yang mencakup data **keranjang belanja** dan **wishlist**.
- Menggunakan **Redux Toolkit** untuk membuat **slice** yang menyimpan data produk dan mengelola perubahan pada **cart** dan **wishlist**.
  - **File**: `src/store/productsSlice.js`, `src/store/index.js`

### **4. Routing**
- **React Router** diimplementasikan untuk navigasi antar halaman, seperti `HomePage`, `ProductListPage`, `CartPage`, `CheckoutPage`, dan `WishlistPage`.
- Menggunakan **dynamic routing** dan **nested routes** untuk menampilkan detail produk berdasarkan ID produk yang dipilih.
  - **File**: `src/App.js`

### **5. Data Fetching**
- Mengambil data produk dari **Fake Store API** menggunakan **`fetch`** dan menangani status loading serta error dengan **`useState`** dan **`useEffect`**.
- Mengelola data yang diambil dan menampilkannya dalam bentuk kartu produk (`ProductCard`).
  - **File**: `src/pages/ProductListPage.js`

### **6. UI/UX Design**
- Desain yang **responsif** dan **modern** menggunakan **Tailwind CSS**, dengan elemen yang mudah diakses dan tampilan yang menarik.
- Penggunaan **hover effects**, **rounded corners**, dan **shadow effects** untuk memberikan **interaktivitas** dan **estetika** pada antarmuka pengguna.
  - **File**: `src/App.css`, `src/pages/HomePage.js`

### **7. Kode yang Bersih dan Terorganisir**
- Kode yang terstruktur dengan baik menggunakan **modularisasi** dengan membagi komponen dan halaman sesuai fungsinya.
- Penggunaan **Redux** dan **custom hooks** untuk memisahkan logika bisnis dari tampilan UI.
  - **File**: `src/store/productsSlice.js`, `src/store/index.js`, `src/pages/CartPage.js`

## **Fitur yang Diimplementasikan**
1. **Halaman Produk**: Menampilkan daftar produk dari API eksternal.
  - **File**: `src/pages/ProductListPage.js`
2. **Keranjang Belanja**: Pengguna dapat menambah, mengurangi, atau menghapus produk di keranjang.
  - **File**: `src/pages/CartPage.js`
3. **Wishlist**: Pengguna dapat menambah dan menghapus produk dari wishlist.
  - **File**: `src/pages/WishlistPage.js`
4. **Checkout**: Pengguna dapat melanjutkan pembelian dan mengonfirmasi pesanan.
  - **File**: `src/pages/CheckoutPage.js`
5. **Pengelolaan Kuantitas Produk**: Menambah atau mengurangi jumlah produk dalam keranjang.
  - **File**: `src/pages/CartPage.js`
6. **Notifikasi**: Menggunakan **`react-toastify`** untuk memberi notifikasi kepada pengguna saat ada perubahan pada keranjang atau wishlist.
  - **File**: `src/pages/CartPage.js`, `src/components/ProductCard.js`
