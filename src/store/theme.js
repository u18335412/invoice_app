import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set, get) => ({
    isDark: true,
    toggleTheme: () =>
      set({
        isDark: !get().isDark,
      }),
  })),
  {
    name: "theme",
  }
);

export default useStore;
