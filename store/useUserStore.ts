import { create } from "zustand";
import { UserStore } from "@/types/store-types";

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
