
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Shortcut } from "../slices/shortcutsSlice";

export const selectDefaultShortcuts = (state: RootState) =>
  state.shortcuts?.defaultShortcuts || [];

export const selectCustomShortcuts = (state: RootState) =>
  state.shortcuts?.customShortcuts || [];

export const selectShortcutOrder = (state: RootState) =>
  state.shortcuts?.shortcutOrder || [];

export const selectAllShortcuts = createSelector(
  [selectDefaultShortcuts, selectCustomShortcuts],
  (defaultShortcuts: Shortcut[], customShortcuts: Shortcut[]) => {
    return [...defaultShortcuts, ...customShortcuts];
  }
);

export const selectOrderedShortcuts = createSelector(
  [
    selectAllShortcuts,
    selectShortcutOrder
  ],
  (allShortcuts: Shortcut[], shortcutOrder: string[]) => {
    if (!shortcutOrder || shortcutOrder.length === 0) {
      return allShortcuts;
    }
    
    const ordered: Shortcut[] = [];
    const usedIds = new Set<string>();
    
    for (const id of shortcutOrder) {
      const shortcut = allShortcuts.find(s => s.id === id);
      if (shortcut && !usedIds.has(shortcut.id)) {
        ordered.push(shortcut);
        usedIds.add(shortcut.id);
      }
    }
    
    const unordered = allShortcuts.filter(
      s => !usedIds.has(s.id)
    );
    
    return [...ordered, ...unordered];
  }
);