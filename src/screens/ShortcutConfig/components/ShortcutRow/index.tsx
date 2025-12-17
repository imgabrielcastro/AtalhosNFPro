import HStack from "../../../../components/Stacks/HStack";
import { Text } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../../../../theme/theme";
import { TouchableOpacity } from "react-native";
import { SCREEN_WIDTH } from "../../../../constants";
import { SCREEN_HEIGHT } from "../../../../constants";

interface Props {
  shortcut: any;
  iconAction: any;
  onPress: (id: string) => void;
  icon: any;
}

export function ShortcutRow({ shortcut, iconAction, onPress, icon }: Props) {
  return (
    <HStack
      style={{
        padding: 12,
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.07,
        borderRadius: 12,
        backgroundColor: theme.colors.background,
        justifyContent: "space-between",
        alignItems: "center",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: theme.colors.shadow,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <HStack style={{ alignItems: "center", gap: 8 }}>
        <FontAwesomeIcon icon={icon} size={22} color={theme.colors.header} />
        <Text variant="titleSmall">{shortcut.label}</Text>
      </HStack>

      <TouchableOpacity onPress={() => onPress(shortcut.id)}>
        <FontAwesomeIcon icon={iconAction} size={16} />
      </TouchableOpacity>
    </HStack>
  );
}
