import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native-paper";
import { RootState } from "../../../../store";
import {
  removeCustomShortcut,
  removeDefaultShortcut,
  addCustomShortcut,
} from "../../../../store/slices/shortcutsSlice";
import VStack from "../../../../components/Stacks/VStack";
import { ALL_SHORTCUTS } from "../../../../data/mockData";
import ActiveShortcuts from "../../components/ActiveShortcut";
import AvailableShortcuts from "../../components/AvaiableShortcuts";

interface Shortcut {
  id: string;
  label: string;
}

export default function PersonalizeShortcutsScreen() {
  const dispatch = useDispatch();

  const { defaultShortcuts, customShortcuts } = useSelector(
    (state: RootState) => state.shortcuts
  );

  const activeShortcutsMap = new Map();
  [...defaultShortcuts, ...customShortcuts].forEach((shortcut) => {
    activeShortcutsMap.set(shortcut.id, shortcut);
  });

  const activeShortcuts = Array.from(activeShortcutsMap.values());

  const allAvailableShortcuts = ALL_SHORTCUTS as unknown as Shortcut[];

  const inactiveShortcuts = allAvailableShortcuts.filter(
    (shortcut) => !activeShortcuts.some((active) => active.id === shortcut.id)
  );

  const handleAddShortcut = (shortcut: Shortcut) => {
    if (!activeShortcuts.some((active) => active.id === shortcut.id)) {
      dispatch(addCustomShortcut(shortcut));
    }
  };

  function handleRemove(id: string) {
    if (defaultShortcuts.some((s) => s.id === id)) {
      dispatch(removeDefaultShortcut(id));
    } else {
      dispatch(removeCustomShortcut(id));
    }
  }

  return (
    <VStack style={{ paddingHorizontal: 32, padding: 16 }}>
      <Text variant="titleMedium">Atalhos na tela inicial</Text>

      <ActiveShortcuts shortcuts={activeShortcuts} onRemove={handleRemove} />

      <Text variant="titleMedium" style={{ marginTop: 24 }}>
        Atalhos disponíveis
      </Text>

      {inactiveShortcuts.length > 0 ? (
        <AvailableShortcuts
          shortcuts={inactiveShortcuts}
          onAdd={handleAddShortcut}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
          Todos os atalhos já estão adicionados
        </Text>
      )}
    </VStack>
  );
}
