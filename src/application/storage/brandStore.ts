import { create } from "zustand";

interface IBrandStore {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const useBrandStore = create<IBrandStore>()((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),
}));

export default useBrandStore;
