import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useAppStore = create(
  persist(
    (set) => ({
      themePreference: 'system',
      setThemePreference: (theme) => set({themePreference: theme}),
    }),
    {
      name: 'app-store', // Unique name for your storage
    },
  ),
);

export default useAppStore;
