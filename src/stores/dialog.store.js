import { create } from "zustand";

export const useDialog = create((set) => ({
  isOpen: false,
  toggleDialog: (toggle) => {
    set(() => ({ isOpen: toggle }));
  },
}));
