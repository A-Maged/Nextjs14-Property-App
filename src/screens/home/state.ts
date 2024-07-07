import { create } from "zustand";

type State = {
  showMap: boolean;
};

type Actions = {
  toggleMap: () => void;
};

export const useHomeStore = create<State & Actions>((set) => ({
  showMap: false,
  toggleMap: () => set((state) => ({ showMap: !state.showMap })),
}));
