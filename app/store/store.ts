// store/store.ts
import { create } from "zustand";

interface StoreState {
  score: number;
  tapBonus: number;
  increment: () => void;
  buy: (price: number) => void;
}

const useStore = create<StoreState>((set) => ({
  score: 0,
  tapBonus: 1,
  increment: () => set((state) => ({ score: state.score + state.tapBonus })),
  buy: (price: number) => set((state) => ({ score: state.score - price })),
}));

export default useStore;
