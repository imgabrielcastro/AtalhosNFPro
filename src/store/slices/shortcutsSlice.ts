// src/store/slices/shortcutsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Shortcut {
  id: string;
  label: string;
}

interface IShortcutState {
  businessType: string;                    // pilates, musculacao, box
  defaultShortcuts: Shortcut[];            // atalhos padrão carregados do mock
  customShortcuts: Shortcut[];             // atalhos adicionados pelo usuário
}

const initialState: IShortcutState = {
  businessType: "",
  defaultShortcuts: [],
  customShortcuts: [],
};

const shortcutsSlice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {
    setBusinessType(state, action: PayloadAction<string>) {
      state.businessType = action.payload;
    },

    setDefaultShortcuts(state, action: PayloadAction<Shortcut[]>) {
      state.defaultShortcuts = action.payload;
    },

    addCustomShortcut(state, action: PayloadAction<Shortcut>) {
      state.customShortcuts.push(action.payload);
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
      state.businessType = "";
      state.defaultShortcuts = [];
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
