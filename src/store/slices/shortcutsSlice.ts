import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Shortcut {
  id: string;
  label: string;
}

interface ShortcutsState {
  defaultShortcuts: Shortcut[];
  customShortcuts: Shortcut[];
  shortcutOrder: string[]; 
}

const initialState: ShortcutsState = {
  defaultShortcuts: [
    { id: "agenda", label: "Agenda" },
    { id: "treino", label: "Treino" },
    { id: "financeiro", label: "Financeiro" },
    { id: "wod", label: "WOD" },
  ],
  customShortcuts: [],
  shortcutOrder: [] 
};

const shortcutsSlice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {
    addCustomShortcut: (state, action: PayloadAction<Shortcut>) => {
      if (!state.shortcutOrder) {
        state.shortcutOrder = [];
      }
      
      const exists = [...state.defaultShortcuts, ...state.customShortcuts]
        .some(s => s.id === action.payload.id);
      
      if (!exists) {
        state.customShortcuts.push(action.payload);
        state.shortcutOrder.push(action.payload.id);
      }
    },
    
    removeDefaultShortcut: (state, action: PayloadAction<string>) => {
      state.defaultShortcuts = state.defaultShortcuts.filter(
        s => s.id !== action.payload
      );
      if (state.shortcutOrder) {
        state.shortcutOrder = state.shortcutOrder.filter(
          id => id !== action.payload
        );
      }
    },
    
    removeCustomShortcut: (state, action: PayloadAction<string>) => {
      state.customShortcuts = state.customShortcuts.filter(
        s => s.id !== action.payload
      );
      if (state.shortcutOrder) {
        state.shortcutOrder = state.shortcutOrder.filter(
          id => id !== action.payload
        );
      }
    },
    
    reorderShortcuts: (state, action: PayloadAction<Shortcut[]>) => {
      if (!state.shortcutOrder) {
        state.shortcutOrder = [];
      }
      
      const newOrder = action.payload.map(item => item.id);
      
      const allShortcutIds = [
        ...state.defaultShortcuts.map(s => s.id),
        ...state.customShortcuts.map(s => s.id)
      ];
      
      const validOrder = newOrder.filter(id => allShortcutIds.includes(id));
      
      state.shortcutOrder = validOrder;
    },
    
        initializeOrder: (state) => {
      if (!state.shortcutOrder || !Array.isArray(state.shortcutOrder)) {
        state.shortcutOrder = [];
      }
      
    
      if (state.shortcutOrder.length === 0) {
        state.shortcutOrder = [
          ...state.defaultShortcuts.map(s => s.id),
          ...state.customShortcuts.map(s => s.id)
        ];
      }
    },
    
    resetShortcuts: (state) => {
      state.defaultShortcuts = initialState.defaultShortcuts;
      state.customShortcuts = [];
      state.shortcutOrder = initialState.defaultShortcuts.map(s => s.id);
    }
  },
});

export const shortcutsReducer = shortcutsSlice.reducer;

export const {
  addCustomShortcut,
  removeDefaultShortcut,
  removeCustomShortcut,
  reorderShortcuts,
  initializeOrder,
  resetShortcuts
} = shortcutsSlice.actions;

export default shortcutsSlice.reducer;