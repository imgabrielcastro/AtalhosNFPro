// screens/PersonalizeShortcutsScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native-paper";
import { RootState } from "../../../../store";
import {
  removeCustomShortcut,
  removeDefaultShortcut,
  addCustomShortcut,
  initializeOrder
} from "../../../../store/slices/shortcutsSlice";
import VStack from "../../../../components/Stacks/VStack";
import { ALL_SHORTCUTS } from "../../../../data/mockData";
import ActiveShortcuts from "../../components/ActiveShortcut";
import AvailableShortcuts from "../../components/AvaiableShortcuts";
import { selectOrderedShortcuts } from "../../../../store/selectors/shortcutsSelectors";

interface Shortcut {
  id: string;
  label: string;
}

export default function PersonalizeShortcutsScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeOrder());
  }, [dispatch]);

  const activeShortcuts = useSelector(selectOrderedShortcuts);
  
  const { defaultShortcuts } = useSelector(
    (state: RootState) => state.shortcuts
  );

  const allAvailableShortcuts = ALL_SHORTCUTS as unknown as Shortcut[];
  
  const inactiveShortcuts = allAvailableShortcuts.filter(
    (shortcut) => !activeShortcuts.some((active) => active.id === shortcut.id)
  );

  function handleAddShortcut(shortcut: Shortcut) {
    dispatch(addCustomShortcut(shortcut));
  }

  function handleRemove(id: string) {
    if (defaultShortcuts.some((s) => s.id === id)) {
      dispatch(removeDefaultShortcut(id));
    } else {
      dispatch(removeCustomShortcut(id));
    }
  }

  return (
    <VStack style={{ 
      paddingHorizontal: 32, 
      padding: 16,
      flex: 1 
    }}>
      <Text variant="titleMedium" style={{ marginBottom: 16 }}>
        Atalhos na tela inicial
      </Text>

      {activeShortcuts.length > 0 ? (
        <ActiveShortcuts
          shortcuts={activeShortcuts}
          onRemove={handleRemove}
        />
      ) : (
        <Text style={{ 
          textAlign: "center", 
          marginTop: 20, 
          color: "#666",
          padding: 20 
        }}>
          Nenhum atalho configurado na tela inicial
        </Text>
      )}

      <Text variant="titleMedium" style={{ 
        marginTop: 24, 
        marginBottom: 16 
      }}>
        Atalhos disponíveis
      </Text>

      {inactiveShortcuts.length > 0 ? (
        <AvailableShortcuts
          shortcuts={inactiveShortcuts}
          onAdd={handleAddShortcut}
        />
      ) : (
        <Text style={{ 
          textAlign: "center", 
          marginTop: 20, 
          color: "#666" 
        }}>
          Todos os atalhos já estão adicionados
        </Text>
      )}
    </VStack>
  );
}