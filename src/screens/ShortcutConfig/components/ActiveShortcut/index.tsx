import HStack from "../../../../components/Stacks/HStack";
import VStack from "../../../../components/Stacks/VStack";
import { Text } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPeopleGroup,
  faCartPlus,
  faDumbbell,
  faMoneyBill,
  faUserPlus,
  faDashboard,
  faWeight,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { theme } from "../../../../theme/theme";
import { TouchableOpacity } from "react-native";
import { SCREEN_WIDTH } from "../../../../constants";
import { SCREEN_HEIGHT } from "../../../../constants";

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

interface Shortcut {
  id: string;
  label: string;
}

interface Props {
  shortcuts: Shortcut[];
  onRemove: (id: string) => void;
}

export default function ActiveShortcuts({ shortcuts, onRemove }: Props) {
  return (
    <VStack
      style={{
        gap: 12,
        padding: 12,
        backgroundColor: theme.colors.background,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {shortcuts.map((shortcut) => (
        <HStack
          key={`active-${shortcut.id}`}
          style={{ alignItems: "center", gap: 6 }}
        >
          <HStack
            style={{
              padding: 12,
              alignItems: "center",
              width: SCREEN_WIDTH * 0.85,
              height: SCREEN_HEIGHT * 0.07,
              borderRadius: 12,
              backgroundColor: theme.colors.background,
              gap: 8,
              justifyContent: "space-between",
              shadowOffset: { width: 0, height: 2 },
              shadowColor: theme.colors.shadow,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <HStack
              style={{ alignItems: "center", gap: 8, paddingHorizontal: 8 }}
            >
              <FontAwesomeIcon
                icon={ICONS_MAP[shortcut.id] ?? faPeopleGroup}
                size={22}
                color={theme.colors.secondary}
              />
              <Text style={{ color: theme.colors.secondary }} variant="titleSmall">
                {shortcut.label}
              </Text>
            </HStack>
            <TouchableOpacity onPress={() => onRemove(shortcut.id)}>
              <FontAwesomeIcon
                icon={faMinusCircle}
                size={16}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
}
