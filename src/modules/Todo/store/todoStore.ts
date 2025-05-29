import { create } from "zustand";
import type { TFilter } from "../types";

export type TTodoStore = {
  filter: TFilter;
  setFilter: (value: TFilter) => void;
};

export const useTodoStore = create<TTodoStore>()((set) => ({
  filter: null,
  setFilter: (value) => set(() => ({ filter: value })),
}));
