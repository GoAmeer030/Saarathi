import { create } from "zustand";

type User = {
  email: string;
} | null;

type AuthStore = {
  user: User;
  setUser: (user: User) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useAuthStore;

// * Need Attention!!
