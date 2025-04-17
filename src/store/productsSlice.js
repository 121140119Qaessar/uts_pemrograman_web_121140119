import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [], // Menambahkan wishlist
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      // Simpan data cart ke localStorage setelah penambahan produk
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // Simpan data cart ke localStorage setelah produk dihapus
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
      // Simpan data cart ke localStorage setelah kuantitas berkurang
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.wishlist.find((item) => item.id === product.id);
      if (!existingProduct) {
        state.wishlist.push(product);
      }
      // Simpan data wishlist ke localStorage setelah penambahan produk
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
      // Simpan data wishlist ke localStorage setelah produk dihapus
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const { setProducts, addToCart, removeFromCart, decreaseQuantity, addToWishlist, removeFromWishlist } = productsSlice.actions;

export default productsSlice.reducer;
