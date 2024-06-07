import axios from 'axios';
import { create } from 'zustand'

export const useProduct = create((set) => ({
  productList: [],
  isLoading: false,
  getAllProducts: async () => {
    try {
      set(() => ({ isLoading: true }));
      const fetchData = await axios.get(`${import.meta.env.VITE_API_BASE_URL}product/all`);
      console.log(fetchData?.data?.data)
      set(() => ({
        productList: fetchData?.data?.data || [],
        isLoading: false,
      }));
    } catch {
      set(() => ({ isLoading: false }));
    }
  }
}))