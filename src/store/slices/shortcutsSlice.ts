import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AVAILABLE_SHORTCUTS, BusinessType } from "../../data/mockData";

export interface Shortcut {
  id: string;
  label: string;
}

interface IShortcutState {
  businessType: BusinessType;
  defaultShortcuts: Shortcut[];
  customShortcuts: Shortcut[];
}

const initialState: IShortcutState = {
  businessType: "pilates",
  defaultShortcuts: AVAILABLE_SHORTCUTS["pilates"],
  customShortcuts: [],
};

const shortcutsSlice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {
    setBusinessType(state, action: PayloadAction<BusinessType>) {
      const type = action.payload;
      state.businessType = type;
      state.defaultShortcuts = AVAILABLE_SHORTCUTS[type];
      state.customShortcuts = [];
    },

    setDefaultShortcuts(state, action: PayloadAction<Shortcut[]>) {
      state.defaultShortcuts = action.payload;
    },

    addCustomShortcut: (state, action) => {
      const shortcut = action.payload;
      const alreadyExists =
        state.customShortcuts.some((s) => s.id === shortcut.id) ||
        state.defaultShortcuts.some((s) => s.id === shortcut.id);

      if (!alreadyExists) {
        state.customShortcuts.push(shortcut);
      }
    },

    removeCustomShortcut(state, action: PayloadAction<string>) {
      state.customShortcuts = state.customShortcuts.filter(
        (s) => s.id !== action.payload
      );
    },

    removeDefaultShortcut(state, action: PayloadAction<string>) {
      state.defaultShortcuts = state.defaultShortcuts.filter(
        (s) => s.id !== action.payload
      );
    },

    clearAllShortcuts(state) {
      state.businessType = "pilates";
      state.defaultShortcuts = AVAILABLE_SHORTCUTS["pilates"];
      state.customShortcuts = [];
    },
  },
});

export const {
  setBusinessType,
  setDefaultShortcuts,
  addCustomShortcut,
  removeCustomShortcut,
  removeDefaultShortcut,
  clearAllShortcuts,
} = shortcutsSlice.actions;

export default shortcutsSlice.reducer;
