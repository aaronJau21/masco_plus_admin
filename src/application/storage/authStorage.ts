import { create } from "zustand";
import { IUser } from "../interfaces/auth/login-response.interface";
import { devtools, persist } from "zustand/middleware";

interface IAuthState {
  token: string | null;
  user: IUser | null;
  setToken: (token: string | null) => void;
  setUser: (user: IUser | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<IAuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        setToken: (token) => set({ token }),
        setUser: (user) => set({ user }),
        clearAuth: () => set({ token: null, user: null }),
      }),
      { name: "auth" }
    )
  )
);

export default useAuthStore;
