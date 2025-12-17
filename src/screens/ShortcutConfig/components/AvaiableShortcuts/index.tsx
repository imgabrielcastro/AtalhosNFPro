import VStack from "../../../../components/Stacks/VStack";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShortcutRow } from ".././ShortcutRow";
import {
  faPeopleGroup,
  faCartPlus,
  faDumbbell,
  faMoneyBill,
  faUserPlus,
  faDashboard,
  faWeight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

interface Shortcut {
  id: string;
  label: string;
}

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

interface Props {
  shortcuts: Shortcut[];
  onAdd: (shortcut: Shortcut) => void;
}

export default function AvailableShortcuts({ shortcuts, onAdd }: Props) {
  return (
    <VStack style={{ gap: 12, alignItems: "center" }}>
      {shortcuts.map((shortcut) => (
        <ShortcutRow
          key={`available-${shortcut.id}`}
          shortcut={shortcut}
          iconAction={faPlus}
          icon={ICONS_MAP[shortcut.id] ?? faPeopleGroup}
          onPress={() => onAdd(shortcut)}
        />
      ))}
    </VStack>
  );
}
