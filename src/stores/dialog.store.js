import { create } from "zustand";

export const useDialog = create((set) => ({
  isOpen: true,
  toggleDialog: (toggle) => {
    set(() => ({ isOpen: toggle }));
  },
}));
