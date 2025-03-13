import { create } from 'zustand';

interface SidebarState {
  open: boolean;
  toggleOpen: () => void;
}

export const useSidebarStore = create<SidebarState>(
  (set: (fn: (state: SidebarState) => SidebarState) => void) => ({
    open: false,
    toggleOpen: () =>
      set((state: SidebarState) => ({
        open: !state.open,
        toggleOpen: state.toggleOpen,
      })),
  })
);
