import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
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
      state.customShortcuts = [];
      state.defaultShortcuts = AVAILABLE_SHORTCUTS[type];
    },

    addCustomShortcut(state, action: PayloadAction<Shortcut>) {
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
      state.customShortcuts = [];
      state.defaultShortcuts = AVAILABLE_SHORTCUTS["pilates"];
    },

    reorderShortcuts(state, action: PayloadAction<Shortcut[]>) {
      const reordered = action.payload;
      const defaultIds = AVAILABLE_SHORTCUTS[state.businessType].map(
        (s) => s.id
      );

      state.defaultShortcuts = reordered.filter((s) =>
        defaultIds.includes(s.id)
      );

      state.customShortcuts = reordered.filter(
        (s) => !defaultIds.includes(s.id)
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action: any) => {
      const persisted = action.payload?.shortcuts;

      const persistedType = persisted?.businessType;

      const businessType: BusinessType =
        persistedType && AVAILABLE_SHORTCUTS[persistedType as BusinessType]
          ? persistedType
          : "pilates";

      const defaultShortcuts = AVAILABLE_SHORTCUTS[businessType];

      const defaultIds = new Set(defaultShortcuts.map((s) => s.id));

      const customShortcuts = (persisted?.customShortcuts ?? []).filter(
        (s: any) => !defaultIds.has(s.id)
      );

      state.businessType = businessType;
      state.defaultShortcuts = defaultShortcuts;
      state.customShortcuts = customShortcuts;
    });
  },
});

export const {
  setBusinessType,
  addCustomShortcut,
  removeCustomShortcut,
  removeDefaultShortcut,
  clearAllShortcuts,
  reorderShortcuts,
} = shortcutsSlice.actions;

export default shortcutsSlice.reducer;
