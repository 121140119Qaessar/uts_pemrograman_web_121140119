import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';  // Import reducer products

const store = configureStore({
  reducer: {
    products: productsReducer,  // Menambahkan reducer produk ke dalam store
  },
});

export default store;
