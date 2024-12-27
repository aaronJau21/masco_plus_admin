import { create } from "zustand";

interface IProductStore {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const useProductStore = create<IProductStore>()((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),
}));

export default useProductStore;
