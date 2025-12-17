import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import HStack from "../../../../components/Stacks/HStack";
import { ShortcutItem } from "../ShortcutItem/index";
import {
  faPlus,
  faPeopleGroup,
  faCartPlus,
  faDumbbell,
  faMoneyBill,
  faComputer,
  faUserPlus,
  faDashboard,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

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
  const { defaultShortcuts, customShortcuts } = useSelector(
    (state: RootState) => state.shortcuts
  );

  const shortcuts = [...defaultShortcuts, ...customShortcuts];

  return (
    <HStack
      style={{
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingLeft: 4,
      }}
    >
      {shortcuts.map((shortcut) => (
        <ShortcutItem
          key={shortcut.id}
          icon={ICONS_MAP[shortcut.id] || faPeopleGroup}
          label={shortcut.label}
        />
      ))}
      <ShortcutItem icon={faPlus} label="Novo" />
    </HStack>
  );
}
