// store/store.ts
import { create } from "zustand";
import { StoreState } from "../lib/definitions";
import { User } from "../lib/definitions";

const useStore = create<StoreState>((set) => ({
  score: 0,
  tapBonus: 1,
  user: null,
  increment: () => set((state) => ({ score: state.score + state.tapBonus })),
  buy: (price: number) => set((state) => ({ score: state.score - price })),
  setUser: (user: User) => set(() => ({ user })),
}));

export default useStore;
