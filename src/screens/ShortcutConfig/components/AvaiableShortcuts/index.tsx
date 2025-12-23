import VStack from "../../../../components/Stacks/VStack";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShortcutRow } from ".././ShortcutRow";
import { ICONS_MAP } from "../../../../constants/icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

interface Shortcut {
  id: string;
  label: string;
}

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
