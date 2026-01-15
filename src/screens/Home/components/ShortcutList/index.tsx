// components/ShortcutList.tsx
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { selectOrderedShortcuts } from "../../../../store/selectors/shortcutsSelectors";
import { initializeOrder } from "../../../../store/slices/shortcutsSlice";
import { useDispatch } from "react-redux";
import HStack from "../../../../components/Stacks/HStack";
import { ShortcutItem } from "../ShortcutItem/index";
import {
  faPlus,
  faPeopleGroup,
  faCartPlus,
  faDumbbell,
  faMoneyBill,
  faUserPlus,
  faDashboard,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "@react-navigation/native";

const ICONS_MAP: Record<string, any> = {
  agenda: faCalendarDays,
  evolucao: faPeopleGroup,
  treino: faDumbbell,
  financeiro: faMoneyBill,
  wod: faWeight,
  novaVenda: faCartPlus,
  novoCliente: faUserPlus,
  dashboard: faDashboard,
};

export default function ShortcutList() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(initializeOrder());
  }, [dispatch]);
  const shortcuts = useSelector(selectOrderedShortcuts);
  const handleNavigation = (shortcutId: string) => {
    switch(shortcutId) {
      case 'agenda':
        navigation.navigate('Agenda');
        break;
      case 'treino':
        navigation.navigate('Treinos');
        break;
      default:
        navigation.navigate('Home');
    }
  };
  return (
    <HStack
      style={{
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingVertical: 8,
      }}
    >
      {shortcuts.map((shortcut) => (
        <ShortcutItem
          key={shortcut.id}
          icon={ICONS_MAP[shortcut.id] || faPeopleGroup}
          label={shortcut.label}
          navigate={() => handleNavigation(shortcut.id)}
        />
      ))}
      
      <ShortcutItem
        icon={faPlus}
        label="Novo"
        navigate={() => navigation.navigate("ShortcutConfig")}
      />
    </HStack>
  );
}